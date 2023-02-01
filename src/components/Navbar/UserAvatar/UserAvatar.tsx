import React from 'react';
import classes from './UserAvatar.module.scss';
import { BsBell } from 'react-icons/bs';
import { RiArrowDropDownFill } from 'react-icons/ri';
import womanSmiling from '../../../assets/user-avatar.png';

const UserAvatar = () => {
  return (
    <div className={classes.user}>
      <p className={`underline`}>Docs</p>
      <BsBell />

      <div className={classes.user_avatar}>
        <img
          src={womanSmiling}
          alt='user avatar - woman smiling'
          className={classes.user_avatar_image}
        />
        <p className={`text-primary`}>Adedeji</p>
        <RiArrowDropDownFill />
      </div>
    </div>
  );
};

export default UserAvatar;
