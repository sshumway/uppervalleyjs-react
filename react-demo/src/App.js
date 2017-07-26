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
} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { user: '' };
  }

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/public">Public Page</Link></li>
            <li><Link to="/protected">Protected Page</Link></li>
          </ul>
          <Route path="/public" component={Public}/>
          <Route path="/login" component={Login}/>
          <PrivateRoute path="/protected" component={Protected}/>
        </div>
      </Router>
    );
  }
}

export default App;
