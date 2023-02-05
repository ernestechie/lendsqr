import React, { useEffect } from 'react';
import classes from './UserHeader.module.scss';
import avatar from '../../assets/avatar.svg';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import useFetchUserDetails from '../../utils/useFetchUserDetails';
import { QueryParams } from '../../types/params';

const UserHeader = () => {
  const { userID } = useParams<QueryParams>();

  const { user, fetchingUser } = useFetchUserDetails(userID!);

  return (
    <div>
      {fetchingUser && <h1>Fetching user...</h1>}
      {!fetchingUser && user ? (
        <div className={classes.user}>
          <div className={classes.user_details}>
            <img src={avatar} alt='user avatar' className={classes.avatar} />
            <div className={classes.name_and_id}>
              <p className={classes.name}>{user.userName}</p>
              <p className={classes.id}>{user.accountNumber}</p>
            </div>
          </div>
          <div className={classes.user_tier}>
            <p className='font-bold text-primary'>User`s Tier</p>
            <div className={classes.user_tier_rating}>
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </div>
          </div>
          <div className={classes.user_account}>
            <p className={`font-bold text-primary text-xl ${classes.balance}`}>
              N{(parseInt(user.accountBalance!) * 5000).toLocaleString()}
            </p>
            <p className='text-sm text-primary'>9912345678/Providus Bank</p>
          </div>
        </div>
      ) : (
        <h1>USER NOT FOUND</h1>
      )}
    </div>
  );
};

export default UserHeader;
