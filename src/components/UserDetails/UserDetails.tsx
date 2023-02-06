import React from 'react';
import { userType } from '../../types/users';
import FluidGrid from '../Layout/FluidGrid/FluidGrid';
import classes from './UserDetails.module.scss';

const UserDetailsComponent = (props: {
  user: userType;
  fetchingUser: boolean;
}) => {
  return (
    <div className={classes.user_details}>
      <div className={classes.info_container}>
        <p className='text-primary font-bold'>Personal Information</p>
        <FluidGrid>
          <div>
            <p className='text-xs text-primary'>FULL NAME</p>
            <p className='text-sm font-bold text-primary'>
              {props.user.profile?.firstName} {props.user.profile?.lastName}
            </p>
          </div>
          <div>
            <p className='text-xs text-primary'>PHONE NUMBER</p>
            <p className='text-sm font-bold text-primary'>
              {props.user.phoneNumber}
            </p>
          </div>
          <div>
            <p className='text-xs text-primary'>EMAIL ADDRESS</p>
            <p className='text-sm font-bold text-primary'>{props.user.email}</p>
          </div>
          <div>
            <p className='text-xs text-primary'>BVN</p>
            <p className='text-sm font-bold text-primary'>
              {props.user.profile?.bvn}
            </p>
          </div>
          <div>
            <p className='text-xs text-primary'>GENDER</p>
            <p className='text-sm font-bold text-primary'>
              {props.user.profile?.gender}
            </p>
          </div>
          <div>
            <p className='text-xs text-primary'>MARITAL STATUS</p>
            <p className='text-sm font-bold text-primary'>{'Married'}</p>
          </div>
          <div>
            <p className='text-xs text-primary'>CHILDREN</p>
            <p className='text-sm font-bold text-primary'>{'None'}</p>
          </div>
          <div>
            <p className='text-xs text-primary'>TYPE OF RESIDENCE</p>
            <p className='text-sm font-bold text-primary'>
              {'Parent`s Apartment'}
            </p>
          </div>
        </FluidGrid>
      </div>
      <div className={classes.info_container}>
        <p className='text-primary font-bold'>Education and Employment</p>
        <FluidGrid>
          <div>
            <p className='text-xs text-primary'>LEVEL OF EDUCATION</p>
            <p className='text-sm font-bold text-primary'>
              {props.user.education?.level}.
            </p>
          </div>
          <div>
            <p className='text-xs text-primary'>EMPLOYMENT STATUS</p>
            <p className='text-sm font-bold text-primary'>
              {props.user.education?.employmentStatus}
            </p>
          </div>
          <div>
            <p className='text-xs text-primary'>SECTOR OF EMPLOYMENT</p>
            <p className='text-sm font-bold text-primary'>
              {props.user.education?.sector}
            </p>
          </div>
          <div>
            <p className='text-xs text-primary'>DURATION OF EMPLOYMENT</p>
            <p className='text-sm font-bold text-primary'>
              {props.user.education?.duration}
            </p>
          </div>
          <div>
            <p className='text-xs text-primary'>OFFICE EMAIL</p>
            <p className='text-sm font-bold text-primary'>
              {props.user.education?.officeEmail}
            </p>
          </div>
          <div>
            <p className='text-xs text-primary'>MONTHLY INCOME</p>
            <p className='text-sm font-bold text-primary'>
              {props.user.profile?.currency}
              {props.user.education?.monthlyIncome[0]!.toLocaleString()} -{' '}
              {props.user.profile?.currency}
              {props.user.education?.monthlyIncome[1]!.toLocaleString()}
            </p>
          </div>
          <div>
            <p className='text-xs text-primary'>LOAN REPAYMENT</p>
            <p className='text-sm font-bold text-primary'>
              {props.user.profile?.currency}
              {props.user.education?.loanRepayment}
            </p>
          </div>
        </FluidGrid>
      </div>
      <div className={classes.info_container}>
        <p className='text-primary font-bold'>Socials</p>
        <FluidGrid>
          <div>
            <p className='text-xs text-primary'>TWITTER</p>
            <p className='text-sm font-bold text-primary'>
              {props.user.socials?.twitter}
            </p>
          </div>
          <div>
            <p className='text-xs text-primary'>FACEBOOK</p>
            <p className='text-sm font-bold text-primary'>
              {props.user.socials?.facebook}
            </p>
          </div>
          <div>
            <p className='text-xs text-primary'>INSTAGRAM</p>
            <p className='text-sm font-bold text-primary'>
              {props.user.socials?.instagram}
            </p>
          </div>
        </FluidGrid>
      </div>
      <div className={classes.info_container}>
        <p className='text-primary font-bold'>Guarantor</p>
        <FluidGrid>
          <div>
            <p className='text-xs text-primary'>FULL NAME</p>
            <p className='text-sm font-bold text-primary'>
              {props.user.guarantor?.firstName} {props.user.guarantor?.lastName}
            </p>
          </div>
          <div>
            <p className='text-xs text-primary'>GENDER</p>
            <p className='text-sm font-bold text-primary'>
              {props.user.guarantor?.gender}
            </p>
          </div>
          <div>
            <p className='text-xs text-primary'>PHONE NUMBER</p>
            <p className='text-sm font-bold text-primary'>
              {props.user.guarantor?.phoneNumber}
            </p>
          </div>
          <div>
            <p className='text-xs text-primary'>ADDRESS</p>
            <p className='text-sm font-bold text-primary'>
              {props.user.guarantor?.address}
            </p>
          </div>
        </FluidGrid>
      </div>
      <div className={classes.info_container}>
        <p className='text-primary font-bold'>Next of Kin</p>
        <FluidGrid>
          <div>
            <p className='text-xs text-primary'>FULL NAME</p>
            <p className='text-sm font-bold text-primary'>Jane Doe</p>
          </div>
          <div>
            <p className='text-xs text-primary'>PHONE NUMBER</p>
            <p className='text-sm font-bold text-primary'>08114759862</p>
          </div>
          <div>
            <p className='text-xs text-primary'>EMAIL ADDRESS</p>
            <p className='text-sm font-bold text-primary'>debby@yahoo.com</p>
          </div>
          <div>
            <p className='text-xs text-primary'>RELATIONSHIP</p>
            <p className='text-sm font-bold text-primary'>Sister</p>
          </div>
        </FluidGrid>
      </div>
    </div>
  );
};

export default UserDetailsComponent;
