/**
 * Test the HomePage
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { IntlProvider } from 'react-intl';

import UsersList from 'components/UsersList';

import { loadUsers } from 'containers/App/actions';

import { HomePage, mapDispatchToProps } from '../index';

describe('<HomePage />', () => {
  it('should render the users list', () => {
    const renderedComponent = shallow(
      <HomePage loadUsers={() => null} users={[]} />
    );
    expect(renderedComponent.contains(<UsersList users={[]} />)).toEqual(true);
  });

  it('should render a non empty h1', () => {
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <HomePage loadUsers={() => null} users={[]} />
      </IntlProvider>
    );
    expect(renderedComponent.find('h1')).not.toBeNull();
    expect(renderedComponent.find('h1').html().length).toBeGreaterThan(0);
  });

  describe('mapDispatchToProps', () => {
    describe('loadUsers', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.loadUsers).toBeDefined();
      });

      it('should dispatch loadUsers when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.loadUsers();
        expect(dispatch).toHaveBeenCalledWith(loadUsers());
      });
    });
  });
});
