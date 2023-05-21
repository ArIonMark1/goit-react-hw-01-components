import '../index.css';
import user from '../dataToComponents/user.json';
import transactions from '../dataToComponents/transactions.json';
import statistics from '../dataToComponents/data.json';
import { FriendList } from './FriendList';
import { ProfilesContainer } from './Profile';
import { Statistics } from './Statistics';
import { TransactionHistory } from './TransactionHistory';

export const App = () => {
  // console.log('user', user);
  return (
    <div className="app">
      <p>React homework template</p>
      <ProfilesContainer data={user} />
      <Statistics title="Upload stats" stats={statistics} />
      <FriendList />
      <TransactionHistory />
    </div>
  );
};
