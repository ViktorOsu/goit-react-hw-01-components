import user from '../constants/user.json';
import data from '../constants/data.json';
import friends from '../constants/friends.json';
import transactions from '../constants/transactions.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendsList } from './FriendList/FriendList';
import { TransactionHistory } from './Transactions/Transactions';

export const App = () => {
  console.log(data);
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
};
