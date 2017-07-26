import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Warning from '../shared/Warning';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      hasUserName: true
    };
    this.onUserNameEntered = this.userNameEntered.bind(this);
  }

  userNameEntered(e) {
    if (this.inputEl.value) {
      this.props.onUserNameEntered(this.inputEl.value);
      this.setState({
        redirect: true
      });
    } else {
      this.setState({
        hasUserName: false
      });
    }
  }

  render() {
    if (this.state.redirect) {
      return (
        <Redirect to={{ pathname: '/chatroom'}} />
      );
    }

    return (
      <div className="column is-half is-offset-one-quarter">
        Enter a handle.
        <div className="field">
          <label htmlFor="user-name" className="label">Name</label>
          <div className="control">
            <input type="text" className="input" placeholder="Name" name="user-name" ref={(el) => this.inputEl = el } />
            { this.state.hasUserName ? '' : <Warning warning='Name required' /> }
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button type="button" className="button is-primary" onClick={this.onUserNameEntered}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
};

export default Login;
