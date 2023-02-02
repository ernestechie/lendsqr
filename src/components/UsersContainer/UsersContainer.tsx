import React from 'react';
import classes from './UsersContainer.module.scss';
import { BsFilter } from 'react-icons/bs';

const UsersContainer = (props: { users: Array<Object> }) => {
  return (
    <div className={classes.users}>
      <div className={classes.users_header}>
        <p>
          Organisation
          <BsFilter />
        </p>
        <p>
          Username
          <BsFilter />
        </p>
        <p>
          Email
          <BsFilter />
        </p>
        <p>
          Phone number
          <BsFilter />
        </p>
        <p>
          Date joined
          <BsFilter />
        </p>
        <p>
          Status
          <BsFilter />
        </p>
      </div>

      {!props.users.length > 0 && (
        <h2 className={classes.no_users}>NO USERS</h2>
      )}
      {props.users.length > 0 && (
        <div>
          {props.users.slice(0, 10).map((user) => (
            <div key={user.id} className={classes.user_item}>
              <p>{user.orgName}</p>
              <p>{user.userName}</p>
              <p>{user.email}</p>
              <p>{user.phoneNumber}</p>
              <p>{user.createdAt}</p>
              <p>{'Active'}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UsersContainer;
