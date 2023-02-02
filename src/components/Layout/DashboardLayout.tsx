import React, { useState } from 'react';
import classes from './DashboardLayout.module.scss';
import { Sidebar, Navbar } from '../../';
import { useContext } from 'react';
import stateContext from '../../context/stateContext';

const DashboardLayout = (props: {
  children: React.ReactNode | React.ReactElement;
}) => {
  const { sidebarOpen, toggleSidebarState } = useContext(stateContext);

  return (
    <>
      <Navbar />
      <main className={classes.main} style={{}}>
        <Sidebar width={sidebarOpen ? '240px' : '64px'} />
        <div
          className={classes.main_body}
          style={{
            width: sidebarOpen ? 'calc(100vw - 240px)' : 'calc(100vw - 64px)',
            transition: '0.3s ease-in',
          }}
        >
          <button
            type='button'
            title='sidebar toggle button'
            className='btn'
            onClick={toggleSidebarState}
          >
            {sidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
          </button>
          {props.children}
        </div>
      </main>
    </>
  );
};

export default DashboardLayout;
