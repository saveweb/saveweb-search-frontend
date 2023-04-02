export type SearchReq = {
  // 关键字
  q: string;
  // 显示全文
  f: boolean;
  // 页数
  p: number;
};

export type Post = {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  link: string;
  tags: string;
  content_length: number;
  // id_feed: string;
  // lastSeen: string;
};
export type SearchRes = {
  estimatedTotalHits: number;
  hits: Array<Post>;
};
