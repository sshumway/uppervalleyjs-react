import React from 'react';
import Warning from './Warning';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Warning warning="Hi" />);
});

it('displays the warning message', () => {
  const warningText = 'Hi';
  const warning = shallow(<Warning warning={warningText} />);

  expect(warning).toHaveText(warningText);
});