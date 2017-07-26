import React from 'react';
import User from './User';

const UserList = (users) => {
  return (
    <div className="columns">
      <div className="column">
        {users.map((user) => <User key={user.id} user={user.text} />)}
      </div>
    </div>
  );
};

export default UserList;
