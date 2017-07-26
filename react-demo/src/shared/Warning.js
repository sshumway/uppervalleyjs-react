import React from 'react';

const Warning = ({ warning }) => warning && (<div className="notification is-warning">{warning}</div>);

export default Warning;