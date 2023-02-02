import React from 'react';
import classes from './UserPopup.module.scss';
import { AiOutlineEye } from 'react-icons/ai';
import { FiUserX, FiUserCheck } from 'react-icons/fi';

const UserPopup = () => {
  return (
    <div className={classes.user_popup}>
      <p title='view details' className='p'>
        <AiOutlineEye className='svg' /> View Details
      </p>
      <p title='blacklist user' className='p'>
        <FiUserX className='svg' /> Blacklist User
      </p>
      <p title='activate user' className='p'>
        <FiUserCheck className='svg' /> Activate User
      </p>
    </div>
  );
};

export default UserPopup;
