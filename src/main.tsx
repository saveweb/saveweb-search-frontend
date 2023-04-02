import { StyleProvider } from '@ant-design/cssinjs';
import 'antd/dist/reset.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

import AntdProvider from './providers/antd';
import RouterProvider from './providers/router';
import './tailwind.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AntdProvider>
      <StyleProvider hashPriority="high">
        <RouterProvider />
      </StyleProvider>
    </AntdProvider>
  </React.StrictMode>,
);
