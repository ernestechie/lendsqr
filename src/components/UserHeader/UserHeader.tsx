import React from 'react';
import classes from './UserHeader.module.scss';
import avatar from '../../assets/avatar.svg';

const UserHeader = () => {
  return (
    <div className={classes.user}>
      <div className={classes.user_details}>
        <img src={avatar} alt='user avatar' className={classes.avatar} />
        <div className={classes.name_and_id}>
          <p className={classes.name}>{'John Doe'}</p>
          <p className={classes.id}>{'LSQFf587g90'}</p>
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
