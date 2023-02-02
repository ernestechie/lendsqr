import React from 'react';
import classes from './UsersContainer.module.scss';
import {
  BsFilter,
  BsArrowLeftSquareFill,
  BsArrowRightSquareFill,
} from 'react-icons/bs';
import { userType } from '../../types/users';
import { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

const UsersContainer = (props: { users: userType[] }) => {
  const [page, setPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);

  const setPageAndPageLimit = (input: number) => {
    if (input === 1) {
      setPage(0);
      setPageLimit(10 * input);
    } else {
      setPage(input * 10 - 10);
      setPageLimit(10 * input);
    }
  };

  const goBack = () => {
    if (page === 0) {
      return;
    } else {
      setPage((prev) => prev - 10);
      setPageLimit((prev) => prev - 10);
    }
  };

  const goFront = () => {
    if (pageLimit === 100) {
      return;
    } else {
      setPage((prev) => prev + 10);
      setPageLimit((prev) => prev + 10);
    }
  };

  return (
    <>
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

        {!props.users && <h2 className={classes.no_users}>NO USERS</h2>}
        {props.users && (
          <>
            {props.users.slice(page, pageLimit).map((user: userType) => (
              <div key={user.id} className={classes.user_item}>
                <>
                  <p>{user.orgName.split('-')[0]}</p>
                  <p>{user.userName}</p>
                  <p>{user.email}</p>
                  <p>{user.phoneNumber}</p>
                  <p>
                    {new Date(user.createdAt).toLocaleString('default', {
                      month: 'short',
                    })}{' '}
                    {new Date(user.createdAt).getDate()},{' '}
                    {new Date(user.createdAt).getUTCFullYear()}{' '}
                    {new Date(user.createdAt).getHours() < 10 && '0'}
                    {new Date(user.createdAt).getHours()}:
                    {new Date(user.createdAt).getMinutes() < 10 && '0'}
                    {new Date(user.createdAt).getMinutes()}{' '}
                    {new Date(user.createdAt).getHours() > 0 &&
                    new Date(user.createdAt).getHours() < 12
                      ? 'AM'
                      : 'PM'}
                  </p>
                  {2022 - new Date(user.createdAt).getUTCFullYear() < 0 && (
                    <span className={classes.pending}>Pending</span>
                  )}
                  {2022 - new Date(user.createdAt).getUTCFullYear() >= 0 &&
                    2022 - new Date(user.createdAt).getUTCFullYear() < 10 && (
                      <span className={classes.active}>Active</span>
                    )}
                  {2022 - new Date(user.createdAt).getUTCFullYear() > 20 && (
                    <span className={classes.blacklisted}>Blacklisted</span>
                  )}
                  {2022 - new Date(user.createdAt).getUTCFullYear() >= 10 &&
                    2022 - new Date(user.createdAt).getUTCFullYear() < 20 && (
                      <span className={classes.inactive}>Inactive</span>
                    )}
                </>
              </div>
            ))}
          </>
        )}
      </div>

      <div className={classes.filter}>
        <div className={classes.page_limit}>
          Showing{' '}
          <span>
            {pageLimit}
            <MdKeyboardArrowDown />
          </span>{' '}
          out of 100
        </div>
        <div className={classes.pagination}>
          <button
            type='button'
            title='go back button'
            onClick={goBack}
            className={`${
              pageLimit === 10 ? classes.btn_disabled : classes.btn_active
            }`}
          >
            <BsArrowLeftSquareFill />
          </button>
          <span onClick={() => setPageAndPageLimit(1)}>1</span>
          <span onClick={() => setPageAndPageLimit(2)}>2</span>
          <span onClick={() => setPageAndPageLimit(3)}>3</span>
          <span onClick={() => setPageAndPageLimit(4)}>4</span>
          <span>...</span>
          <span onClick={() => setPageAndPageLimit(8)}>8</span>
          <span onClick={() => setPageAndPageLimit(9)}>9</span>
          <span onClick={() => setPageAndPageLimit(10)}>10</span>
          <button
            type='button'
            title='go font button'
            onClick={goFront}
            className={`${
              pageLimit === 100 ? classes.btn_disabled : classes.btn_active
            }`}
          >
            <BsArrowRightSquareFill />
          </button>
        </div>
      </div>
    </>
  );
};

export default UsersContainer;
