import React from 'react';
import { mount } from 'enzyme';

import UserListItem from '../item';

let user;

describe('<UserListItem />', () => {
  beforeEach(() => {
    user = {
      id: 1,
      username: 'aaa',
      email: 'aaa',
    };
  });

  it('should contain a link', () => {
    const renderedComponent = mount(<UserListItem user={user} />);
    expect(renderedComponent.find('a').length).toEqual(1);
  });

  it('should contain username', () => {
    const renderedComponent = mount(<UserListItem user={user} />);
    expect(renderedComponent.find('.username').length).toEqual(1);
  });

  it('should contain booking number', () => {
    const renderedComponent = mount(<UserListItem user={user} />);
    expect(renderedComponent.find('.booking').length).toEqual(1);
  });

  it('should not contain premium badge if not a premium user', () => {
    const renderedComponent = mount(<UserListItem user={user} />);
    expect(renderedComponent.find('.premium').length).toEqual(0);
  });

  it('should contain premium badge if a premium user', () => {
    user.isPremiumUser = true;
    const renderedComponent = mount(<UserListItem user={user} />);
    expect(renderedComponent.find('.premium').length).toEqual(1);
  });
});
