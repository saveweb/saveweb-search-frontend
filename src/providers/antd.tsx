import { ConfigProvider } from 'antd';
import type React from 'react';

import { PRIMARY_COLOR } from '../constant';

const AntdProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: PRIMARY_COLOR,
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default AntdProvider;
