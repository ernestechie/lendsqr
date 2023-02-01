import React from 'react';
import Navbar from '../Navbar/Navbar';
import classes from './DashboardLayout.module.scss';

const DashboardLayout = (props: {
  children: React.ReactNode | React.ReactElement;
}) => {
  return (
    <>
      <Navbar />
      <main className={classes.main_body}>{props.children}</main>
    </>
  );
};

export default DashboardLayout;
