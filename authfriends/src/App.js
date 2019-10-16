import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute'

import './App.css';
//Components
import Friends from './components/FriendsList'
import Login from './components/LoginFriends'
import FriendForm from './components/FriendsForm'

function App() {
  const handleLogout = () => {
    localStorage.clear();
  }
  return (
    <Router>
    <div className="App">
    <nav>
                <Link to ='/login' onClick= {handleLogout}>Login</Link>
                <Link to ='/dashboard'>Dashboard</Link>
                <Link to ='/addfriend'>Add Friend</Link>
            </nav>
<Switch>
<Route exact path='/login' component={Login}/>
<PrivateRoute exact path='/dashboard' component={Friends}/>
<PrivateRoute exact path='/addfriend' component={FriendForm}/>
</Switch>
    </div>
    </Router>
  );
}

export default App;
