import { service } from './service';
import type { SearchReq, SearchRes } from './types';

export const getSearch = (params: SearchReq): Promise<SearchRes> => {
  return service.get('/search', { params: { ...params, h: true } });
};
