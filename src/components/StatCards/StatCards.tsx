import React from 'react';
import StatCard from './StatCard';
import classes from './StatCards.module.scss';
import { statCardsData } from '../../static/Data';

const StatCards = () => {
  return (
    <div className={classes.stat_cards}>
      {statCardsData.map((card) => (
        <StatCard
          key={card.name}
          value={card.value}
          name={card.name}
          icon={card.icon}
          color={card.color}
          background={card.background}
        />
      ))}
    </div>
  );
};

export default StatCards;
