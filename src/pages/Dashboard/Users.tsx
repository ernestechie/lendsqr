import React from 'react';
import { useState, useEffect } from 'react';
import { DashboardLayout, StatCards, UsersContainer } from '../../';
import classes from './Users.module.scss';
import { userType } from '../../types/users';

const Users = () => {
  const [fetchingUsers, setFetchingUsers] = useState(false);
  const [users, setUsers] = useState<userType[]>([]);

  useEffect(() => {
    const fetchUsersHandler = async () => {
      setFetchingUsers(true);

      try {
        const request = await fetch(
          'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/'
        );

        if (request.ok) {
          const response = await request.json();

          setUsers(response);
          setFetchingUsers(false);
          return response;
        } else {
          setFetchingUsers(false);
          console.log('Something went wrong...');
          return null;
        }
      } catch (error) {
        console.log(error);
      }
    };

    const lsUsers = localStorage.getItem('users');
    console.log(typeof lsUsers);

    if (lsUsers !== 'undefined') {
      console.log('Found LS Data...');

      setUsers(JSON.parse(lsUsers));
    } else {
      fetchUsersHandler()
        .then((snapshot) => {
          localStorage.setItem('users', JSON.stringify(snapshot));
          console.log(snapshot);
          setUsers(snapshot);
        })
        .catch((error) => console.log(error));
    }
  }, []);

  return (
    <DashboardLayout>
      <p className={`text-xl text-primary ${classes.heading}`}>Users</p>
      <StatCards />
      {fetchingUsers && (
        <p className={`text-lg text-primary font-bold`}>Fetching users...</p>
      )}
      <UsersContainer users={users} />
    </DashboardLayout>
  );
};

export default Users;
