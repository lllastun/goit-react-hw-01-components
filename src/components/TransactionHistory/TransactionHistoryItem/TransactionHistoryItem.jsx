import React from 'react';
import css from './TransactionHistoryItem.module.css';
import PropTypes from 'prop-types';

const TransactionHistoryItem = ({
  transaction: { type, amount, currency },
}) => {
  return (
    <tr>
      <td className={css.type}>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

export default TransactionHistoryItem;

TransactionHistoryItem.propTypes = {
  transaction: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};
