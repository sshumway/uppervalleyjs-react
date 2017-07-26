import React from 'react';

const MessageList = ({ messages }) => {

  return (
    <div className="content message-list">
      {messages.map((message) => (<div key={message.id}>{message.user}: {message.text}</div>))}
    </div>
  );

};

export default MessageList;
