import { Pagination } from 'antd';
import { useLoaderData, useSearchParams } from 'react-router-dom';

import type { SearchRes } from '../api/types';
import PostCard from '../components/PostCard';
import SearchForm from '../components/SearchForm';
import { SEARCH_PARAMS } from '../constant';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchRes = useLoaderData() as SearchRes;

  const SearchPagination = () => (
    <Pagination
      showSizeChanger={false}
      defaultCurrent={Number(searchParams.get(SEARCH_PARAMS.PAGE)) + 1}
      total={searchRes.estimatedTotalHits}
      pageSize={10}
      onChange={(page) => {
        setSearchParams({
          ...Object.fromEntries(searchParams.entries()),
          p: String(page - 1),
        });
      }}
    />
  );

  return (
    <div className="flex flex-col gap-4 items-center">
      <SearchForm
        initialData={{
          keyword: searchParams.get(SEARCH_PARAMS.KEYWORD)!,
          showFull: searchParams.get(SEARCH_PARAMS.SHOW_FULL) === 'true',
        }}
      />
      <div className="text-sm">约 {searchRes.estimatedTotalHits} 条结果</div>
      <SearchPagination />
      {searchRes.hits.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
      <SearchPagination />
    </div>
  );
};

export default Search;
