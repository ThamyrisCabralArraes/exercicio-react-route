import React, { Component } from 'react';
import Home from './components/Home';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import About from './components/About';
import Users from './components/Users';

import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Link to={'/'}>Home</Link> <span> | </span>
      <Link to={'/about'}>About</Link> <span> | </span>
      <Link to={'/users'}>Users</Link>
      <Switch>
        <Route path={'/'} component={Home} exact />
        <Route path={'/about'} component={About} />
        <Route path={'/users/:id'} render={(props) => <Users {...props} greetingsMessage={'Good Morning'} />} />
      </Switch>
      </BrowserRouter>
      
    );
  }
}

export default App;
