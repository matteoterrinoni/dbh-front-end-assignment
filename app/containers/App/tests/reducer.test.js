import { fromJS } from 'immutable';

import appReducer from '../reducer';
import {
  loadUsers,
  usersLoaded,
  usersLoadingError,
  loadUser,
  userLoaded,
  userLoadingError,
  editUser,
  userEdited,
  userEditingError,
} from '../actions';

const baseState = {
  loading: false,
  error: false,
  data: {
    users: false,
  },
};

describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS(baseState);
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadUsers action correctly', () => {
    const expectedResult = state
      .set('loading', true)
      .set('error', false)
      .setIn(['data', 'users'], false);

    expect(appReducer(state, loadUsers())).toEqual(expectedResult);
  });

  it('should handle the usersLoaded action correctly', () => {
    const fixture = [
      {
        name: 'My Repo',
      },
    ];
    const expectedResult = state
      .setIn(['data', 'users'], fixture)
      .set('loading', false);

    expect(appReducer(state, usersLoaded(fixture))).toEqual(expectedResult);
  });

  it('should handle the usersLoadingError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = state.set('error', fixture).set('loading', false);

    expect(appReducer(state, usersLoadingError(fixture))).toEqual(
      expectedResult
    );
  });

  it('should handle the userLoad action correctly', () => {
    const fixture = 111;

    const expectedResult = state.set('loading', true).set('error', false);

    expect(appReducer(state, loadUser(fixture))).toEqual(expectedResult);
  });

  it('should handle the userLoaded action correctly', () => {
    const fixture = {
      id: 111,
    };

    const expectedResult = state
      .set('loading', false)
      .set('error', false)
      .setIn(['data', 'users'], [fixture]);

    expect(appReducer(state, userLoaded(fixture))).toEqual(expectedResult);
  });

  it('should replace an existing user', () => {
    const oldFixture = {
      id: 111,
      username: 'OLD',
    };

    state = fromJS({
      loading: false,
      error: false,
      data: {
        users: [oldFixture],
      },
    });

    const newFixture = {
      id: 111,
      username: 'NEW',
    };

    const expectedResult = fromJS(baseState).setIn(
      ['data', 'users'],
      [newFixture]
    );

    expect(appReducer(state, userLoaded(newFixture))).toEqual(expectedResult);
  });

  it('should handle the userLoadingError action correctly', () => {
    const fixture = 'error';

    const expectedResult = state.set('loading', false).set('error', fixture);

    expect(appReducer(state, userLoadingError(fixture))).toEqual(
      expectedResult
    );
  });

  it('should handle the editUser action correctly', () => {
    const fixture = {
      id: 111,
    };

    const expectedResult = state.set('loading', true).set('error', false);

    expect(appReducer(state, editUser(fixture))).toEqual(expectedResult);
  });

  it('should edit an existing user correctly', () => {
    const oldFixture = {
      id: 111,
      username: 'OLD',
    };

    state = fromJS({
      loading: false,
      error: false,
      data: {
        users: [oldFixture],
      },
    });

    const newFixture = {
      id: 111,
      username: 'NEW',
    };

    const expectedResult = fromJS(baseState).setIn(
      ['data', 'users'],
      [newFixture]
    );

    expect(appReducer(state, userEdited(newFixture))).toEqual(expectedResult);
  });

  it('should handle the userEditingError action correctly', () => {
    const fixture = 'error';
    const expectedResult = state.set('loading', false).set('error', fixture);

    expect(appReducer(state, userEditingError(fixture))).toEqual(
      expectedResult
    );
  });

  describe('loading state from server', () => {
    const sampleUsers = [{ name: 'sample user' }];

    beforeEach(() => {
      state = fromJS({
        loading: false,
        error: false,
        data: {
          users: sampleUsers,
        },
      });
    });

    it('should normalize the users', () => {
      const resposInState = appReducer(state, {}).getIn(['data', 'users']);
      expect(Array.isArray(resposInState)).toBe(true);
    });
  });

  describe('managing error on ERROR action correctly', () => {
    beforeEach(() => {
      state = fromJS({
        loading: false,
        error: false,
        data: {
          users: false,
        },
      });
    });

    const stateWithError = (err) => state.set('error', err);

    it('should return false if error is false', () => {
      expect(appReducer(state, userEditingError(false))).toEqual(
        stateWithError(false)
      );
      expect(appReducer(state, userLoadingError(false))).toEqual(
        stateWithError(false)
      );
      expect(appReducer(state, usersLoadingError(false))).toEqual(
        stateWithError(false)
      );
    });

    it('should return false if error is {}', () => {
      const fixture = {};
      expect(appReducer(state, userEditingError(fixture))).toEqual(
        stateWithError(false)
      );
      expect(appReducer(state, userLoadingError(fixture))).toEqual(
        stateWithError(false)
      );
      expect(appReducer(state, usersLoadingError(fixture))).toEqual(
        stateWithError(false)
      );
    });

    it('should return fixture if error is a valid error', () => {
      const fixture = 'any';
      expect(appReducer(state, userEditingError(fixture))).toEqual(
        stateWithError(fixture)
      );
      expect(appReducer(state, userLoadingError(fixture))).toEqual(
        stateWithError(fixture)
      );
      expect(appReducer(state, usersLoadingError(fixture))).toEqual(
        stateWithError(fixture)
      );
    });
  });
});
