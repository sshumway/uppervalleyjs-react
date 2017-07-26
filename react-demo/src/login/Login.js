import React from 'react';

const Login = (onUserNameEntered) => {

  return (
    <div className="column is-half is-offset-one-quarter">
      Enter a handle.
      <div className="field">
        <label htmlFor="user-name" className="label">Name</label>
        <div className="control">
          <input type="text" className="input" placeholder="Name" name="user-name" />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <button type="button" className="button is-primary" onClick={this.onUserNameEntered}>Submit</button>
        </div>
      </div>
    </div>
  );

};

export default Login;
