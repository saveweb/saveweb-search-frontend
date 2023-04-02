import { CalendarOutlined, UserOutlined } from '@ant-design/icons';
import { Card, Tag } from 'antd';
import dayjs from 'dayjs';

import type { Post } from '../api/types';
import { PRIMARY_COLOR } from '../constant';

// TODO: 关键字高亮
const PostCard = ({ post }: { post: Post }) => {
  return (
    <Card
      title={post.title}
      className="w-full"
      extra={<a href={post.link}>查看原文</a>}
    >
      <div className="space-y-3">
        <div>
          {post.author && (
            <Tag icon={<UserOutlined />} color={PRIMARY_COLOR}>
              {post.author.slice(1)}
            </Tag>
          )}
          <Tag icon={<CalendarOutlined />} color={PRIMARY_COLOR}>
            {dayjs.unix(Number(post.date)).format('YYYY/MM/DD HH:mm:ss')}
          </Tag>
        </div>
        <div className="break-words">{post.content}</div>
        {post.tags && (
          <div className="flex flex-wrap gap-1">
            {post.tags
              .slice(1)
              .split(' #')
              .map((tag, index) => (
                <Tag key={index}>#{tag}</Tag>
              ))}
          </div>
        )}
      </div>
    </Card>
  );
};

export default PostCard;
