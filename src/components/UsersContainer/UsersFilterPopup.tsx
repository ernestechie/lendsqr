import React from 'react';
import classes from './UsersFilterPopup.module.scss';

const UsersFilterPopup = () => {
  return (
    <div className={classes.users_filter_popup}>
      <form>
        <div className={classes.input_div}>
          <label htmlFor='organisation' title='organisation'>
            Organisation
          </label>
          <select name='organisation' id='organisation'>
            <option value='Labore'>Labore</option>
          </select>
        </div>
        <div className={classes.input_div}>
          <label htmlFor='username' title='username'>
            Username
          </label>
          <input
            type='text'
            placeholder='Username'
            title='username'
            id='username'
          />
        </div>
        <div className={classes.input_div}>
          <label htmlFor='email' title='email'>
            Email
          </label>
          <input type='email' placeholder='Email' title='email' id='email' />
        </div>
        <div className={classes.input_div}>
          <label htmlFor='date' title='date'>
            Date
          </label>
          <input type='date' title='date' id='date' />
        </div>
        <div className={classes.input_div}>
          <label htmlFor='phone' title='phone'>
            Phone Number
          </label>
          <input
            type='phone'
            placeholder='Phone Number'
            title='phone'
            id='phone'
          />
        </div>
        <div className={classes.input_div}>
          <label htmlFor='status' title='status'>
            Status
          </label>
          <select name='status' id='status'>
            <option value='Active'>Active</option>
            <option value='Inactive'>Inactive</option>
            <option value='Pending'>Pending</option>
            <option value='Blacklisted'>Blacklisted</option>
          </select>
        </div>

        <div className={classes.users_filter_popup_buttons}>
          <button type='button' title='reset filter'>
            Reset
          </button>
          <button type='button' title='filter users'>
            Filter
          </button>
        </div>
      </form>
    </div>
  );
};

export default UsersFilterPopup;
