import { fromJS } from 'immutable';

import {
  selectGlobal,
  makeSelectLoading,
  makeSelectError,
  makeSelectUsers,
  makeSelectUser,
  makeSelectLocationState,
} from '../selectors';

describe('selectGlobal', () => {
  it('should select the global state', () => {
    const globalState = fromJS({});
    const mockedState = fromJS({
      global: globalState,
    });
    expect(selectGlobal(mockedState)).toEqual(globalState);
  });
});

describe('makeSelectLoading', () => {
  const loadingSelector = makeSelectLoading();
  it('should select the loading', () => {
    const loading = false;
    const mockedState = fromJS({
      global: {
        loading,
      },
    });
    expect(loadingSelector(mockedState)).toEqual(loading);
  });
});

describe('makeSelectError', () => {
  const errorSelector = makeSelectError();
  it('should select the error', () => {
    const error = 404;
    const mockedState = fromJS({
      global: {
        error,
      },
    });
    expect(errorSelector(mockedState)).toEqual(error);
  });
});

describe('makeSelectUsers', () => {
  const usersSelector = makeSelectUsers();
  it('should select the users', () => {
    const users = fromJS([]);
    const mockedState = fromJS({
      global: {
        data: {
          users,
        },
      },
    });
    expect(usersSelector(mockedState)).toEqual(users);
  });
});

describe('makeSelectUser', () => {
  const userSelector = makeSelectUser();

  it('should select the user', () => {
    const user = {
      id: 1,
    };
    const mockedState = fromJS({
      global: {
        data: {
          users: [user],
        },
      },
    });
    expect(userSelector(mockedState, 1).toJS()).toEqual(user);
  });
});

describe('makeSelectLocationState', () => {
  const locationStateSelector = makeSelectLocationState();
  it('should select the route as a plain JS object', () => {
    const route = fromJS({
      locationBeforeTransitions: null,
    });
    const mockedState = fromJS({
      route,
    });
    expect(locationStateSelector(mockedState)).toEqual(route.toJS());
  });
});
