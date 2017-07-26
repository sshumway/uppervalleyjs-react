import React from 'react';
import Login from './Login';
import { shallow, mount } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Login />);
});

it('shows a warning when user submits without entering name', () => {
  const warningMessage = 'Name required';
  const login = mount(<Login />);
  const button = login.find('button');
  
  expect(button.length).toBe(1);
  
  button.simulate('click');

  expect(login).toIncludeText('Name required');
});