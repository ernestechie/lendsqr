import React from 'react';
import Navbar from '../Navbar/Navbar';

const DashboardLayout = (props: {
  children: React.ReactNode | React.ReactElement;
}) => {
  return (
    <div>
      <Navbar />
      {props.children}
    </div>
  );
};

export default DashboardLayout;
