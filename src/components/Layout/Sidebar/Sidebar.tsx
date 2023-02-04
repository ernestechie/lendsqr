import React from 'react';
import classes from './Sidebar.module.scss';
import {
  sidebarDataOne,
  sidebarDataThree,
  sidebarDataTwo,
} from '../../../static/Data';
import { FaHome, FaBriefcase } from 'react-icons/fa';
import { RiArrowDownSLine } from 'react-icons/ri';
import { useContext } from 'react';
import stateContext from '../../../context/stateContext';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = (props: { width: string }) => {
  const { sidebarOpen } = useContext(stateContext);
  const location = useLocation();

  return (
    <div
      className={classes.sidebar}
      style={{
        width: props.width,
      }}
    >
      <div className={classes.sidebar_absolute}>
        <div className={classes.fixed}>
          <div
            className={classes.sidebar_link}
            style={{
              width: props.width,
              marginBottom: '40px',
            }}
          >
            <p className={classes.sidebar_link_icon}>
              <FaBriefcase />
            </p>
            {sidebarOpen && (
              <p className={classes.sidebar_link_name}>Switch Organisation</p>
            )}
            <p className={classes.sidebar_link_icon}>
              <RiArrowDownSLine />
            </p>
          </div>
          <div
            className={classes.sidebar_link}
            style={{
              width: props.width,
              color: '#545f7d !important',
            }}
          >
            <p className={classes.sidebar_link_icon}>
              <FaHome />
            </p>
            {sidebarOpen && (
              <p className={classes.sidebar_link_name}>Dashboard</p>
            )}
          </div>

          {sidebarOpen && <p className={classes.title}>Customers</p>}
          {sidebarDataOne.map((data, index) => (
            <Link
              //? This makes sure the 'Users' link on the sidebar goes to the users page, but other link remains on thesame page of the dashboard
              to={index === 0 ? '/dashboard' : location}
              key={`${data.name}-${index}`}
            >
              <div
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
            </Link>
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
