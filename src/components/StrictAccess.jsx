import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class StrictAccess extends Component {

  render() {
    const {user, password} = this.props

    if (user !== "joao" || password !== "1234") {
      alert("Acess denied")
      return <Redirect to="/" />
    }

    return (
      <div>
        <h2>strictacess</h2>

      </div>
    );
  }
}

export default StrictAccess;
