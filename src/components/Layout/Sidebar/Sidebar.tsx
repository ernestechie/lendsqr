import React from 'react';
import classes from './Sidebar.module.scss';
import {
  sidebarDataOne,
  sidebarDataThree,
  sidebarDataTwo,
} from '../../../static/Data';
import { useContext } from 'react';
import stateContext from '../../../context/stateContext';

const Sidebar = (props: { width: string }) => {
  const { sidebarOpen } = useContext(stateContext);

  return (
    <div
      className={classes.sidebar}
      style={{
        width: props.width,
      }}
    >
      <div className={classes.sidebar_absolute}>
        <div className={classes.fixed}>
          {sidebarOpen && <p className={classes.title}>Customers</p>}
          {sidebarDataOne.map((data, index) => (
            <div
              key={`${data.name}-${index}`}
              className={classes.sidebar_link}
              style={{
                width: props.width,
                marginBottom: index === 7 ? '30px' : '0',
              }}
            >
              <div className={classes.label}></div>
              <p className={classes.sidebar_link_icon}>{data.icon}</p>
              {sidebarOpen && (
                <p className={classes.sidebar_link_name}>{data.name}</p>
              )}
            </div>
          ))}
          {/* BUSINESSES */}
          {sidebarOpen && <p className={classes.title}>Businesses</p>}
          {sidebarDataTwo.map((data, index) => (
            <div
              key={`${data.name}-${index}`}
              className={classes.sidebar_link}
              style={{
                width: props.width,
                marginBottom: index === 8 ? '30px' : '0',
              }}
            >
              <div className={classes.label}></div>
              <p className={classes.sidebar_link_icon}>{data.icon}</p>
              {sidebarOpen && (
                <p className={classes.sidebar_link_name}>{data.name}</p>
              )}
            </div>
          ))}
          {/* SETTINGS */}
          {sidebarOpen && <p className={classes.title}>Settings</p>}
          {sidebarDataThree.map((data, index) => (
            <div
              key={`${data.name}-${index}`}
              className={classes.sidebar_link}
              style={{
                width: props.width,
              }}
            >
              <div className={classes.label}></div>
              <p className={classes.sidebar_link_icon}>{data.icon}</p>
              {sidebarOpen && (
                <p className={classes.sidebar_link_name}>{data.name}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
