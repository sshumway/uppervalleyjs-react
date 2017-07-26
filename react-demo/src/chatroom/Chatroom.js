import React, { Component } from 'react';
import UserList from './UserList';
import MessageList from './MessageList';
import fire from './fire';

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
      let message = { text: snapshot.val(), id: snapshot.key };
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
    fire.database().ref('messages').push(message);
  }

  render() {
    return (
      <div>
        <div className="columns">
          <div className="column is-one-quarter">
            <UserList users={this.state.users} />
          </div>
          <div className="column">
            <MessageList messages={this.state.messages} />
          </div>
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