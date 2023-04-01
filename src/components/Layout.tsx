import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 h-[100dvh]">
      <Outlet />
    </div>
  );
};

export default Layout;
