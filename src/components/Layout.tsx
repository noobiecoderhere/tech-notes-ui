import { Outlet } from 'react-router-dom';

// Add any common components across Routes here
// Exmaple: Header, Nav, Footer

const Layout = (): JSX.Element => {
  return <Outlet />;
};
export default Layout;
