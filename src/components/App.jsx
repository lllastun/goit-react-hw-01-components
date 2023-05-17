import FriendList from './FriendList/FriendList';
import { Profile } from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import css from './App.module.css'

export const App = () => {
  return (
    <>
      <Profile />
      <FriendList />
      <Statistics />
      <TransactionHistory />
    </>
  );
};
