import React from 'react';

const MessageList = (messages) => {

  return (
    <div className="content">
      {messages.map((message) => (<div key={message.id}>{message.text}</div>))}
    </div>
  );

};

export default MessageList;
