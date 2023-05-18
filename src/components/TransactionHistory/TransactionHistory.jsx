import React from 'react';
import TransactionHistoryItem from './TransactionHistoryItem/TransactionHistoryItem';
import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

const style = {
  backgroundColor: '#00bbdd',
  height: '32px',
  color: 'white',
  fontWeight: 400,
};

const TransactionHistory = ({ transactionHistory }) => {
  const transactionArray = transactionHistory.map(transaction => (
    <TransactionHistoryItem transaction={transaction} key={transaction.id} />
  ));

  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr style={style}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>{transactionArray}</tbody>
    </table>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  transactionHistory: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
