import React from 'react';
import logoDesktop from '../../assets/logo.svg';
import logoMobile from '../../../public/favicon.svg';
import classes from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <img
        src={logoMobile}
        alt='Lendsqr mobile logo'
        className={`${classes.logo_mobile}`}
      />
      <img
        src={logoDesktop}
        alt='Lendsqr desktop logo'
        className={`${classes.logo_desktop}`}
      />
      <p>SEARCH BAR</p>
      <p>USER AVATAR</p>
    </nav>
  );
};

export default Navbar;
