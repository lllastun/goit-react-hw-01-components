import React from 'react';
import TransactionHistoryItem from './TransactionHistoryItem/TransactionHistoryItem';
import css from './TransactionHistory.module.css';

const TransactionHistory = ({ transactionHistory }) => {
  const transactionArray = transactionHistory.map(transaction => (
    <TransactionHistoryItem transaction={transaction} key={transaction.id} />
  ));
  // console.log(transactionHistory);
  // console.log(transactionArray);
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {/* {transactionArray} */}
      <tbody></tbody>
    </table>
  );
};

export default TransactionHistory;
