/**
 * Test the UserPage
 */

import React from 'react';
import { shallow } from 'enzyme';

import { loadUser } from 'containers/App/actions';

import PageError from 'components/PageError';

import { UserPage, mapDispatchToProps } from '../index';

import Editor from '../editor';
import HomeLink from '../homeLink';
import Title from '../title';

let pageProps;

const user = {
  id: 1,
  username: 'aaa',
  email: 'aaa',
};

describe('<UserPage />', () => {
  beforeEach(() => {
    pageProps = {
      uid: user.id,
      loadUser: () => null,
      user,
      error: false,
    };
  });

  it('should render the user editor', () => {
    const renderedComponent = shallow(<UserPage {...pageProps} />);
    expect(renderedComponent.containsMatchingElement(<Editor />)).toEqual(true);
  });

  it('should render a link to the homepage', () => {
    const renderedComponent = shallow(<UserPage {...pageProps} />);
    expect(renderedComponent.containsMatchingElement(<HomeLink />)).toEqual(
      true
    );
  });

  it('should render a Title', () => {
    const renderedComponent = shallow(<UserPage {...pageProps} />);
    expect(
      renderedComponent.containsMatchingElement(
        <Title username={pageProps.user.username} />
      )
    ).toEqual(true);
  });

  it('should render uid if user is not defined', () => {
    pageProps.user = null;
    const renderedComponent = shallow(<UserPage {...pageProps} />);
    expect(
      renderedComponent.containsMatchingElement(
        <Title username={pageProps.uid} />
      )
    ).toEqual(true);
  });

  it('should render a PageError Comp', () => {
    const renderedComponent = shallow(<UserPage {...pageProps} />);
    expect(
      renderedComponent.containsMatchingElement(
        <PageError error={pageProps.error} />
      )
    ).toEqual(true);
  });

  describe('mapDispatchToProps', () => {
    describe('loadUser', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.loadUser).toBeDefined();
      });

      it('should dispatch loadUser when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.loadUser(pageProps.uid);
        expect(dispatch).toHaveBeenCalledWith(loadUser(pageProps.uid));
      });
    });
  });
});
