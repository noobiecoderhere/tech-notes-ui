import { Outlet } from 'react-router-dom';
import DashFooter from './DashFooter';
import DashHeader from './DashHeader';

// Add any common components across Dash Routes here
// Exmaple: Header, Nav, Footer

const DashLayout = (): JSX.Element => {
  return (
    <>
      <DashHeader />
      <div className='dash-container'>
        <Outlet />
      </div>
      <DashFooter />
    </>
  );
};
export default DashLayout;
