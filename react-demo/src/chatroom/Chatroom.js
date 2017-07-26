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
      this.setState({ messages: [message].concat(this.state.messages) });
    });

    let userRef = fire.database().ref('users').orderByKey();

    userRef.on('child_added', snapshot => {
      let user = { text: snapshot.val(), id: snapshot.key };
      this.setState({ users: [user].concat(this.state.users) });
    });

    userRef.on('child_removed', snapshot => {
      let users = this.state.users.filter((user) => user.id != snapshot.key);
      this.setState({ users });
    });
  }

  messageSubmitted(message) {
    fire.database().ref('messages').push({ message, user: this.props.user });
  }

  render() {
    return (
      <div>
        <div className="notification is-primary">
          Hi {this.props.user}!
        </div>
        <div className="columns">
          <div className="column is-one-quarter">
            <UserList users={this.state.users} />
          </div>
          <div className="column is-one-half">
            <MessageList messages={this.state.messages} />
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
