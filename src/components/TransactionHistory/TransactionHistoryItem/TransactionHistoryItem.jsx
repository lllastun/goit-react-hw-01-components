import React from 'react';
import css from './TransactionHistoryItem.module.css'

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
