import React, { useEffect } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import avatar from '../../assets/avatar.svg';
import { QueryParams } from '../../types/params';
import { userType } from '../../types/users';
import useFetchUserDetails from '../../utils/useFetchUserDetails';
import classes from './UserHeader.module.scss';

const UserHeader = (props: { user: userType; fetchingUser: boolean }) => {
  return (
    <div>
      <div className={classes.user}>
        <div className={classes.user_grid}>
          <div className={classes.user_grid_details}>
            <img
              src={props.user.profile?.avatar}
              alt='user avatar'
              className={classes.avatar}
            />
            <div className={classes.name_and_id}>
              <p className={classes.name}>{props.user.userName}</p>
              <p className={classes.id}>{props.user.accountNumber}</p>
            </div>
          </div>
          <div className={classes.user_grid_tier}>
            <p className='font-bold text-primary'>User`s Tier</p>
            <div className={classes.user_grid_tier_rating}>
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </div>
          </div>
          <div className={classes.user_grid_account}>
            <p className={`font-bold text-primary text-xl ${classes.balance}`}>
              N{props.user.accountBalance!.toLocaleString()}
            </p>
            <p className='text-sm text-primary'>9912345678/Providus Bank</p>
          </div>
        </div>

        <ul className={classes.user_nav}>
          <li>General Details</li>
          <li>Documents</li>
          <li>Bank Details</li>
          <li>Loans</li>
          <li>Savings</li>
          <li>App and System</li>
        </ul>
      </div>
    </div>
  );
};

export default UserHeader;
