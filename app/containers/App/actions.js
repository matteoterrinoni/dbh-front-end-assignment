/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_USERS,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_ERROR,
  LOAD_USER,
  LOAD_USER_SUCCESS,
  LOAD_USER_ERROR,
  EDIT_USER,
  EDIT_USER_ERROR,
  EDIT_USER_SUCCESS,
} from './constants';

/**
 * Load the users, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_USERS
 */
export function loadUsers() {
  return {
    type: LOAD_USERS,
  };
}

/**
 * Dispatched when the users are loaded by the request saga
 *
 * @param  {array} users The users data
 *
 * @return {object}      An action object with a type of LOAD_USERS_SUCCESS passing the users
 */
export function usersLoaded(users) {
  return {
    type: LOAD_USERS_SUCCESS,
    users,
  };
}

/**
 * Dispatched when loading the users fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_USERS_ERROR passing the error
 */
export function usersLoadingError(error) {
  return {
    type: LOAD_USERS_ERROR,
    error,
  };
}

/**
 * Load the users, this action starts the request saga
 * @param  {string} uid The error
 *
 * @return {object} An action object with a type of LOAD_USERS
 */
export function loadUser(uid) {
  return {
    type: LOAD_USER,
    uid,
  };
}

/**
 * Dispatched when the users are loaded by the request saga
 *
 * @param  {object} user The user data
 *
 * @return {object}      An action object with a type of LOAD_USERS_SUCCESS passing the users
 */
export function userLoaded(user) {
  return {
    type: LOAD_USER_SUCCESS,
    user,
  };
}

/**
 * Dispatched when loading the users fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_USERS_ERROR passing the error
 */
export function userLoadingError(error) {
  return {
    type: LOAD_USER_ERROR,
    error,
  };
}

/**
 * Load the users, this action starts the request saga
 *
 * @param  {object} user The error
 *
 * @return {object} An action object with a type of LOAD_USERS
 */
export function editUser(user) {
  return {
    type: EDIT_USER,
    user,
  };
}

/**
 * Dispatched when the users are loaded by the request saga
 *
 * @param  {object} user The user data
 *
 * @return {object}      An action object with a type of LOAD_USERS_SUCCESS passing the user
 */
export function userEdited(user) {
  return {
    type: EDIT_USER_SUCCESS,
    user,
  };
}

/**
 * Dispatched when loading the users fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_USERS_ERROR passing the error
 */
export function userEditingError(error) {
  return {
    type: EDIT_USER_ERROR,
    error,
  };
}
