import {
  CalendarOutlined,
  EditOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Card, Tag } from 'antd';
import dayjs from 'dayjs';
import { marked } from 'marked';
import { useLocation } from 'react-router-dom';

import type { Post } from '../api/types';
import { PRIMARY_COLOR } from '../constant';

// TODO: 不知道咋把 post.author.slice(1) 插进 HTML，暂时把 span 去掉
const PostCard = ({ post }: { post: Post }) => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const fullTextFlag = params.get('f') === 'true';
  const htmlSummary = marked.parse(post.content.replace(/\n{3,}/g, '\n\n'));
  const summary = htmlSummary
    .replace(/<[^>]*>/g, '')
    .replace(/:::|{.*}|{.*/g, '');
  // TODO: 全文输出解析字体问题
  post.content = fullTextFlag ? post.content : summary;
  return (
    <Card
      title={<div dangerouslySetInnerHTML={{ __html: post.title }} />}
      className="w-full"
      extra={
        <>
          <a
            href={`https://box.othing.xyz/i/?a=reader&search=e:${post.id}&ajax=1`}
            style={{ marginRight: '10px' }}
          >
            查看快照
          </a>
          <a href={post.link}>查看原文</a>
        </>
      }
    >
      <div className="space-y-3">
        <div>
          {post.author && (
            <Tag icon={<UserOutlined />} color={PRIMARY_COLOR}>
              {post.author.slice(1).replace(/<\/?span[^>]*>/g, '')}
            </Tag>
          )}
          <Tag icon={<CalendarOutlined />} color={PRIMARY_COLOR}>
            {dayjs.unix(Number(post.date)).format('YYYY/MM/DD HH:mm:ss')}
          </Tag>
          <Tag icon={<EditOutlined />} color={PRIMARY_COLOR}>
            约 {post.content_length} 字
          </Tag>
        </div>
        <div
          className="break-words"
          dangerouslySetInnerHTML={{
            __html: post.content,
          }}
        ></div>
        {post.tags && (
          <div className="flex flex-wrap gap-1">
            {post.tags
              .slice(1)
              .split(' #')
              .map((tag, index) => (
                <Tag key={index}>
                  {<div dangerouslySetInnerHTML={{ __html: '#' + tag }} />}
                </Tag>
              ))}
          </div>
        )}
      </div>
    </Card>
  );
};

export default PostCard;
