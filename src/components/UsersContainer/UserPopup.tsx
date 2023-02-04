import React from 'react';
import classes from './UserPopup.module.scss';
import { AiOutlineEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { FiUserX, FiUserCheck } from 'react-icons/fi';

const UserPopup = (props: { id: string }) => {
  return (
    <div className={classes.user_popup}>
      <Link to={`/dashboard/${props.id}`}>
        <p title='view details' className='p'>
          <AiOutlineEye className='svg' /> View Details
        </p>
      </Link>
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
