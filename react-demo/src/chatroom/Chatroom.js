import React, { Component } from 'react';
import UserList from './UserList';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import fire from '../fire';
import { Redirect } from 'react-router-dom';

class Chatroom extends Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      users: []
    };
    this.onSubmitMessage = this.messageSubmitted.bind(this);
  }

  componentWillMount() {
    let messagesRef = fire.database().ref('messages').orderByKey().limitToLast(100);

    messagesRef.on('child_added', snapshot => {
      let message = { text: snapshot.val().message, id: snapshot.key, user: snapshot.val().user };
      this.setState({ messages: this.state.messages.concat([message]) });
    });

    let userRef = fire.database().ref('users').orderByKey();

    userRef.on('child_added', snapshot => {
      let user = { text: snapshot.val(), id: snapshot.key };
      this.setState({ users: [user].concat(this.state.users) });
    });

    userRef.on('child_removed', snapshot => {
      let users = this.state.users.filter((user) => user.id !== snapshot.key);
      this.setState({ users });
    });
  }

  componentWillUnmount() {
    fire.database().ref('messages').off();
    fire.database().ref('users').off();
  }

  messageSubmitted(message) {
    message && this.props.user && fire.database().ref('messages').push({ message, user: this.props.user });
  }

  render() {
    if (!this.props.user) {
      return (
        <Redirect to="/" />
      );
    }
    return (
      <div>
        <div className="notification is-primary">
          Hi {this.props.user}!
        </div>
        <div className="columns">
          <div className="column is-one-quarter">
            <div className="box">
              <p className="is-large">Users</p>
              <UserList users={this.state.users} />
            </div>
          </div>
          <div className="column is-one-half">
            <div className="box">
              <MessageList messages={this.state.messages} />
            </div>
          </div>
          <div className="column is-one-quarter"></div>
        </div>
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <MessageForm onSubmitMessage={this.onSubmitMessage} />
          </div>
        </div>
      </div>
    );
  }
}

export default Chatroom;
