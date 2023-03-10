import React, { Component } from 'react';

class About extends Component {
  render() {
    const {history} = this.props
    const { location } = history
    return (
      <div>
        <h2>About</h2>
        <p> My awesome About component</p>
        <p>{location.state ? location.state.nome : 'Pessoa desconhecida'}</p>
        <button
          type="button"
          onClick={ () => console.log(history) }
        >
          History
        </button>
      </div>
    );
  }
}

export default About;
