import React from 'react';
import css from './StatisticItem.module.css';

const StatisticItem = ({ id, label, percentage }) => {
  // const { id, label, percenatage } = data;
  // console.log(data);
  // console.log(data.data.label);
  // console.log(percenatage);
  return (
    <li className={css.item}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}</span>
    </li>
  );
};

export default StatisticItem;
