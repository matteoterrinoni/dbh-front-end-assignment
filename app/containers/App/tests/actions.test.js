import {
  LOAD_USERS,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_ERROR,
  LOAD_USER,
  LOAD_USER_SUCCESS,
  LOAD_USER_ERROR,
  EDIT_USER,
  EDIT_USER_SUCCESS,
  EDIT_USER_ERROR,
} from '../constants';

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

describe('App Actions', () => {
  describe('loadUsers', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_USERS,
      };

      expect(loadUsers()).toEqual(expectedResult);
    });
  });

  describe('usersLoaded', () => {
    it('should return the correct type and the passed users', () => {
      const fixture = ['Test'];
      const expectedResult = {
        type: LOAD_USERS_SUCCESS,
        users: fixture,
      };

      expect(usersLoaded(fixture)).toEqual(expectedResult);
    });
  });

  describe('usersLoadingError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: LOAD_USERS_ERROR,
        error: fixture,
      };

      expect(usersLoadingError(fixture)).toEqual(expectedResult);
    });
  });

  describe('loadUser', () => {
    it('should return the correct type and uid', () => {
      const fixture = 111;

      const expectedResult = {
        type: LOAD_USER,
        uid: fixture,
      };

      expect(loadUser(fixture)).toEqual(expectedResult);
    });
  });

  describe('userLoaded', () => {
    it('should return the correct type and user', () => {
      const fixture = {
        id: 111,
      };
      const expectedResult = {
        type: LOAD_USER_SUCCESS,
        user: fixture,
      };

      expect(userLoaded(fixture)).toEqual(expectedResult);
    });
  });

  describe('userLoadingError', () => {
    it('should return the correct type and error', () => {
      const fixture = 'error';
      const expectedResult = {
        type: LOAD_USER_ERROR,
        error: fixture,
      };

      expect(userLoadingError(fixture)).toEqual(expectedResult);
    });
  });

  describe('editUser', () => {
    it('should return the correct type and user', () => {
      const fixture = {
        id: 111,
      };
      const expectedResult = {
        type: EDIT_USER,
        user: fixture,
      };

      expect(editUser(fixture)).toEqual(expectedResult);
    });
  });

  describe('userEdited', () => {
    it('should return the correct type and user', () => {
      const fixture = {
        id: 111,
      };
      const expectedResult = {
        type: EDIT_USER_SUCCESS,
        user: fixture,
      };

      expect(userEdited(fixture)).toEqual(expectedResult);
    });
  });

  describe('userEditingError', () => {
    it('should return the correct type and error', () => {
      const fixture = 'error';
      const expectedResult = {
        type: EDIT_USER_ERROR,
        error: fixture,
      };

      expect(userEditingError(fixture)).toEqual(expectedResult);
    });
  });
});
