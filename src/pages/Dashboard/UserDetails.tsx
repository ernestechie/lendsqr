import React from 'react';
import { useState, useEffect } from 'react';
import { DashboardLayout, UserHeader } from '../../';
import classes from './UserDetails.module.scss';
import { userType } from '../../types/users';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import UserDetailsComponent from '../../components/UserDetails/UserDetails';
import { useParams } from 'react-router-dom';
import { QueryParams } from '../../types/params';
import useFetchUserDetails from '../../utils/useFetchUserDetails';

const UserDetails = () => {
  const { userID } = useParams<QueryParams>();

  const { user, fetchingUser } = useFetchUserDetails(userID!);

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
      {fetchingUser && <h1>Fetching user details...</h1>}
      {user && !fetchingUser ? (
        <div>
          <UserHeader user={user!} fetchingUser={fetchingUser} />
          <UserDetailsComponent user={user!} fetchingUser={fetchingUser} />
        </div>
      ) : (
        <h1>User not found</h1>
      )}
    </DashboardLayout>
  );
};

export default UserDetails;
