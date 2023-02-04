import React from 'react';
import { useState, useEffect } from 'react';
import { DashboardLayout, UserHeader } from '../../';
import classes from './UserDetails.module.scss';
import { userType } from '../../types/users';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const UserDetails = () => {
  const [fetchingUserDetails, setFetchingUserDetails] = useState(false);
  const [userDetails, setUserDetails] = useState<userType[]>([]);

  return (
    <DashboardLayout>
      <Link className={classes.go_back} to='/dashboard'>
        <HiOutlineArrowNarrowLeft />
        <p>Back to Users</p>
      </Link>
      <div className={classes.heading}>
        <p className='text-xl text-primary '>User Details</p>
        <div className={classes.heading_buttons}>
          <button type='button'>Blacklist User</button>
          <button type='button'>Activate User</button>
        </div>
      </div>
      <UserHeader />
    </DashboardLayout>
  );
};

export default UserDetails;
