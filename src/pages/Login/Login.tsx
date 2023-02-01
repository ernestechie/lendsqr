import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classes from './Login.module.scss';
import logo from '../../assets/logo.svg';
import pablo_sign_in from '../../assets/pablo-sign-in.svg';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <div>
      <img src={logo} alt='Lendsqr Logo' className={classes.logo} />
      <div className={classes.login_page}>
        <div className={classes.login_page_grid_containers}>
          <img
            src={pablo_sign_in}
            alt='a doodle man walking through a door holding a briefcase'
            className={classes.pablo_sign_in}
          />
        </div>
        <div className={classes.login_page_grid_containers}>
          <form className={classes.login_form}>
            <div className={classes.welcome}>
              <h1 className={`${classes.welcome_text} text-primary`}>
                Welcome!
              </h1>
              <p className='text-lg text-secondary'>Enter details to login</p>
            </div>
            {/*  */}
            <input
              type='email'
              placeholder='Email'
              className={classes.input_field}
            />
            <div className={classes.input_group}>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder='Password'
                className={classes.input_field}
              />
              <p
                className={classes.show_password_btn}
                onClick={toggleShowPassword}
              >
                {showPassword ? 'HIDE' : 'SHOW'}
              </p>
            </div>
            <Link
              to='/login'
              className={`${classes.forgotten_password} text-accent`}
            >
              FORGOTTEN PASSWORD?
            </Link>
            <button
              type='button'
              className={`${classes.login_btn} btn bg-accent`}
              onClick={() => navigate('/dashboard')}
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
