import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fire from './fire';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
import Login from './login/Login';
import Chatroom from './chatroom/Chatroom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { user: '' };
    this.login = this.onLogin.bind(this);
  }

  onLogin(user) {
    this.setState({ user });
    var ref = fire.database().ref('users');
    ref.push(user).onDisconnect().remove();
  }

  render() {
    return (
      <Router>
        <div>
          <Route path="/" render={(props) => (<Login { ...props } onUserNameEntered={ this.login } />)} />
          <Route path="/chatroom" render={(props) => (<Chatroom { ...props } user={ this.state.user } />)} />
        </div>
      </Router>
    );
  }
}

export default App;
