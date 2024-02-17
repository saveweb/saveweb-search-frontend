import { GithubOutlined, LinkOutlined } from '@ant-design/icons';
import { List, Tag } from 'antd';

import SearchForm from '../components/SearchForm';
import { PRIMARY_COLOR } from '../constant';

const tips = [
  '全文搜索，模糊搜索，简繁同搜，拼音，同音字。',
  '133k+ 篇中文博客文章（包含少量播客），共收录有 1.6K+ 博客。',
  '搜索结果以匹配度排序，没有时间权重，这样更容易找到真正有价值的文章。（时间排序以后将提供）',
  '可以用 ";作者" 来筛选同作者的文章。数据库月度更新，如果你需要实时信息，请使用其他优美的搜索引擎。希望你能找到有用的东西。',
  '如需添加收录，E-Mail: search[at]saveweb.org',
];

// FIXME: 垂直居中
// TODO: 头图
const Home = () => {
  return (
    <div className="flex justify-center items-center h-5/6 flex-col gap-3">
      <SearchForm />
      <List
        dataSource={tips}
        bordered
        renderItem={(item) => (
          <List.Item>
            <ul>
              <li>{item}</li>
            </ul>
          </List.Item>
        )}
      />
      <div className="absolute bottom-0 w-full flex justify-center pb-4">
        <Tag icon={<GithubOutlined />} color={PRIMARY_COLOR}>
          <a href="https://github.com/saveweb/saveweb-search-frontend">
            saveweb/saveweb-search-frontend
          </a>
        </Tag>
        <Tag icon={<LinkOutlined />} color={PRIMARY_COLOR}>
          <a href={import.meta.env.VITE_APP_API_BASE_URL}>旧版传送门&API</a>
        </Tag>
      </div>
    </div>
  );
};

export default Home;
