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

  componentDidMount() {
    this.inputEl.focus();
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
        <Redirect push to={{ pathname: '/chatroom'}} />
      );
    }

    return (
      <form onSubmit={this.onUserNameEntered}>
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
              <button type="submit" className="button is-primary">Submit</button>
            </div>
          </div>
        </div>
      </form>
    );
  }
};

export default Login;
