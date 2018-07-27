/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { combineReducers } from 'redux-immutable';
import { List } from 'immutable';

import {
  LOAD_USERS_SUCCESS,
  LOAD_USERS,
  LOAD_USERS_ERROR,
  LOAD_USER_SUCCESS,
  LOAD_USER,
  LOAD_USER_ERROR,
  EDIT_USER,
  EDIT_USER_SUCCESS,
  EDIT_USER_ERROR,
} from './constants';

import { Users } from '../UserPage/model';

function loading(state = false, action) {
  switch (action.type) {
    case LOAD_USERS:
    case LOAD_USER:
    case EDIT_USER:
      return true;
    case LOAD_USERS_SUCCESS:
    case LOAD_USER_SUCCESS:
    case EDIT_USER_SUCCESS:
      return false;
    case LOAD_USERS_ERROR:
    case LOAD_USER_ERROR:
    case EDIT_USER_ERROR:
      return false;
    default:
      return state;
  }
}

function error(state = false, action) {
  switch (action.type) {
    case LOAD_USERS:
    case LOAD_USER:
    case EDIT_USER:
      return false;
    case LOAD_USERS_SUCCESS:
    case LOAD_USER_SUCCESS:
    case EDIT_USER_SUCCESS:
      return false;
    case LOAD_USERS_ERROR:
    case LOAD_USER_ERROR:
    case EDIT_USER_ERROR:
      if (action.error.constructor === Object) {
        return Object.keys(action.error).length === 0 ? false : action.error;
      }
      return action.error || false;
    default:
      return state;
  }
}

function users(state = false, action) {
  if (List.isList(state)) {
    // normalize the state from the server
    state = state.toJS(); // eslint-disable-line no-param-reassign
  }

  const usersState = state || [];

  switch (action.type) {
    case LOAD_USERS:
      return false;
    case LOAD_USERS_SUCCESS:
      return action.users;
    case LOAD_USER_SUCCESS:
      return Users(usersState).set(action.user).users;
    case EDIT_USER_SUCCESS:
      return Users(usersState).set(action.user).users;
    default:
      return state;
  }
}

const data = combineReducers({
  users,
});

export default combineReducers({
  loading,
  error,
  data,
});
