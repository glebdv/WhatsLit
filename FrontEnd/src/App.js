import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import Login from './views/login';
import Profile from './views/profile'
import Main from './views/main';
import Rating from './views/rating';
import Settings from './views/settings'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: true
    }
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          {/* <Route path="/profile" render={(routeProps) => { 
          return <Profile history={routeProps.history} />}} /> */}

          <Route path="/ratings" component={Rating} />
          <Route path="/settings" component={Settings} />
          <Route exact path="/" component={Main} />
        </Switch>
      </div>
    );
  }
}

export default App;
