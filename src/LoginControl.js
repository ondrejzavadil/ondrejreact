import React, { Component } from 'react';
import ConditionalRedner from './ConditionalRedner';

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false }
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    if (isLoggedIn) {
      return (
        <div>
          <UserGreeting isLoggedIn={isLoggedIn} />
          <LogoutButton onClick={this.handleLogoutClick} />
        </div>
      );
    }
    return (
      <div>
        <GuestGreeting isLoggedIn={isLoggedIn} />
        <LoginButton onClick={this.handleLoginClick} />
      </div>
    );
  }
}

export default LoginControl

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

function UserGreeting(props) {
  return <h1>Welcome Back</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up</h1>;
}
