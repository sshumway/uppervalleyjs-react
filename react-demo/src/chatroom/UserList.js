import React from 'react';
import User from './User';

const UserList = ({ users }) => {
  return (
    <p className="notification is-info">
      {users.map((user) => <User key={user.id} user={user.text} />)}
    </p>
  );
};

export default UserList;
