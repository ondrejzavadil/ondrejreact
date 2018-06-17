import React, { Component } from 'react';

class ConditionalRedner extends React.Component {
  constructor(props) {
    super(props);
    this.isLoggedIn = props.isLoggedIn;
  }

  render() {
    console.log('ConditionalRedner:' + this.isLoggedIn);
    if (this.isLoggedIn) {
      return this.UserGreeting();
    }
    return this.GuestGreeting();
  }

  UserGreeting(props) {
    return <h1>Welcome Back</h1>;
  }

  GuestGreeting(props) {
    return <h1>Please sign up</h1>;
  }
}

export default ConditionalRedner
