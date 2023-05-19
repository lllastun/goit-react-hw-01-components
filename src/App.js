import friendList from './Data/friends.json';
import user from './Data/user.json';
import data from './Data/data.json';
import transactionHistory from './Data/transactions.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import Statistics from 'components/Statistics/Statistics';
import { Profile } from 'components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics data={data} />
      <FriendList friendList={friendList} />
      <TransactionHistory transactionHistory={transactionHistory} />
    </>
  );
};
