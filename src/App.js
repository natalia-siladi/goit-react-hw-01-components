
import './App.css';
import Profile from './components/profile/Profile'
import Statistics from './components/Statistics/Statistics'
import FriendsList from './components/FriendList/FriendList/FriendList'
import TransactionHistory from './components/TransactionHistory/TransactionHistory'
import data from './components/Statistics/data.json'
import user from './components/profile/user.json'
import friendsInfo from './components/FriendList/friends.json'
import transactionData from './components/TransactionHistory/transactions.json';

function App() {
  return (
    <div className='App'>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
       
      />
      
      <Statistics
        title="Upload stats"
        stats={data}
      />

       <FriendsList
        friends={friendsInfo}
      />
        <TransactionHistory
        items={transactionData}
      />
      
    </div>
  );
}

export default App;
