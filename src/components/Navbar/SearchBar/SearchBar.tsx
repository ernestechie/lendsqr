import React from 'react';
import classes from './SearchBar.module.scss';
import { IoIosSearch } from 'react-icons/io';

const SearchBar = () => {
  return (
    <div className={classes.search}>
      <input
        type='text'
        title='search bar'
        placeholder='Search for anything'
        className={classes.search_input}
      />
      <button
        type='button'
        title='search button'
        className={classes.search_button}
      >
        <IoIosSearch />
      </button>
    </div>
  );
};

export default SearchBar;
