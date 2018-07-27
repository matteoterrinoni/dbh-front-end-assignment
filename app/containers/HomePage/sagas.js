/**
 * Gets the users of the user from Github
 */

import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_USERS } from 'containers/App/constants';
import { usersLoaded, usersLoadingError } from 'containers/App/actions';

import request from 'utils/request';

import Api from 'containers/App/model/api';

/**
 * users request/response handler
 */
export function* getUsers() {
  // Select username from store
  const requestURL = `${Api.basePath}users`;

  try {
    // Call our request helper (see 'utils/request')
    const users = yield call(request, requestURL);
    yield put(usersLoaded(users));
  } catch (err) {
    const e = yield err;
    yield put(usersLoadingError(e));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* usersData() {
  // Watches for LOAD_USERS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(LOAD_USERS, getUsers);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [usersData];
