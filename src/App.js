import friendList from './components/FriendList/data/friends.json';
import user from './components/Profile/data/user.json';
import data from './components/Statistics/data/data.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import css from './components/App.module.css';
import Statistics from 'components/Statistics/Statistics';
import { Profile } from 'components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';
import transactionHistory from './components/TransactionHistory/data/transactions.json';
// import PropTypes from 'prop-types';

export const App = () => {
  // console.log(user);
  return (
    <>
      <Profile user={user} />
      <Statistics data={data} />
      <FriendList friendList={friendList} />
      <TransactionHistory transactionHistory={transactionHistory} />
    </>
  );
};
