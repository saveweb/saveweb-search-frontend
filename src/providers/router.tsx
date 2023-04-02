import {
  createBrowserRouter,
  RouterProvider as ReactRouterProvider,
} from 'react-router-dom';

import { getSearch } from '../api';
import type { SearchReq } from '../api/types';
import Layout from '../components/Layout';
import { SEARCH_PARAMS } from '../constant';
import Home from '../pages/Home';
import Search from '../pages/Search';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/search',
        element: <Search />,
        loader: async ({ request }) => {
          const url = new URL(request.url);
          const searchParams: SearchReq = {
            q: url.searchParams.get(SEARCH_PARAMS.KEYWORD)!,
            f: url.searchParams.get(SEARCH_PARAMS.SHOW_FULL) === 'true',
            p: Number(url.searchParams.get(SEARCH_PARAMS.PAGE)),
          };
          return await getSearch(searchParams);
        },
      },
    ],
  },
]);

const RouterProvider = () => {
  return <ReactRouterProvider router={router} />;
};

export default RouterProvider;
