import { Checkbox, Form, Input, List } from 'antd';

const tips = [
  '全文搜索，模糊搜索，简繁同搜，拼音，同音字。',
  '有近 11 万篇中文博客文章（包含少量播客），共收录有 1.4K+ 博客。',
  '搜索结果以匹配度排序，没有时间权重，这样更容易找到真正有价值的文章。',
  '可以用 ";作者" 来筛选同作者的文章。数据库月度更新，如果你需要实时信息，请使用其他优美的搜索引擎。希望你能在这十几万篇文章里找到有用的东西。',
  '如需添加收录，给我发消息 TG: @yzqzss / Email: yzqzss@othing.xyz',
];

const Home = () => {
  return (
    <div className="flex justify-center items-center h-5/6 flex-col gap-3">
      <Form
        layout="inline"
        className="w-full items-center gap-4 justify-center sm:flex-nowrap"
      >
        <Input.Search size="large" enterButton placeholder="请输入关键字" />
        <Checkbox className="sm:w-32">展开全文</Checkbox>
      </Form>
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
    </div>
  );
};

export default Home;
