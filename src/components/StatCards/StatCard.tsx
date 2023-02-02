import React from 'react';
import classes from './StatCard.module.scss';

const StatCard = (props: {
  value: number;
  name: string;
  icon: React.ReactElement;
  color: string;
  background: string;
}) => {
  return (
    <div className={classes.stat_card}>
      <p
        className='s'
        style={{
          background: props.background,
          color: props.color,
        }}
      >
        {props.icon}
      </p>
      <p className='text-sm text-secondary'>{props.name.toUpperCase()}</p>
      <p className='text-xl font-bold text-primary'>
        {props.value.toLocaleString()}
      </p>
    </div>
  );
};

export default StatCard;
