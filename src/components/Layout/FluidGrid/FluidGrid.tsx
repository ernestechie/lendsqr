import React from 'react';
import classes from './FluidGrid.module.scss';

const FluidGrid = (props: {
  children: React.ReactNode | React.ReactElement;
}) => {
  return <div className={classes.grid}>{props.children}</div>;
};

export default FluidGrid;
