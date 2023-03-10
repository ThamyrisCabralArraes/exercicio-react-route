import React, { Component } from 'react';

class Home extends Component {
  render() {
    const {history} = this.props
    return (
      <div>
        <h2>Home</h2>
        <p> My awesome Home component </p>
        <button 
        type='button'
        onClick={ () => history.push('/about') }
        > ir para about</button>
      </div>
    );
  }
}

export default Home;
