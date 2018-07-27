import React from 'react';
import { shallow } from 'enzyme';

import UsersList from '../index';
import UserListItem from '../item';

describe('<UsersList />', () => {
  it('should render a div', () => {
    const renderedComponent = shallow(<UsersList users={[]} />);
    expect(renderedComponent.type()).toEqual('div');
  });

  it('should render UserListItem if users prop is defined', () => {
    const user = {
      id: 1,
      username: 'text',
      email: 'aaa',
    };
    const renderedComponent = shallow(<UsersList users={[user]} />);
    expect(renderedComponent.contains(<UserListItem user={user} />)).toBe(true);
  });
});
