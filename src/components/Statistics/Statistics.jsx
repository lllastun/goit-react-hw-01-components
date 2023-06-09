import React from 'react';
import css from './Statistics.module.css';
import StatisticItem from 'components/Statistics/StatisticItem/StatisticItem';
import PropTypes from 'prop-types';

const Statistics = ({ data }) => {
  const newdata = data.map(item => <StatisticItem key={item.id} {...item} />);
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>Upload stats</h2>
      <ul className={css.statList}>{newdata}</ul>
    </section>
  );
};

export default Statistics;

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
