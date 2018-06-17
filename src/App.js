import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './Toggle';

class App extends Component {
  state = { toggle: true };
  toggleToggle = () => this.setState({ toggle: !this.state.toggle });

  render() {
    const { toggle } = this.state;
    const name = 'Josh Perez';
    const user = {
      firstName: 'Harper',
      lastName: 'Lopez'
    };

    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}</h2>
        <a href="#" onClick={activateLasers}>
          Activate Lasers
        </a>
        <Toggle />
      </div>
    );

    return element;
  }
}

function activateLasers(e) {
  e.preventDefault();
  console.log('The link was clicked');
}

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function Welcome(props) {
  return <h1>Cao, {props.name}</h1>
}

export default App;
