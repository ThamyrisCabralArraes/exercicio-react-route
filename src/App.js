import React, { Component } from 'react';
import Home from './components/Home';
import { BrowserRouter } from 'react-router-dom';
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
      <Route path={'/'} component={Home} exact />
      <Route path={'/about'} component={About} />
      <Route path={'/users'} component={Users} exact />
      </BrowserRouter>
      
    );
  }
}

export default App;
