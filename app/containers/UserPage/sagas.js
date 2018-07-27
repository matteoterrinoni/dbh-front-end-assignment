import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import {
  userLoaded,
  userLoadingError,
  userEdited,
  userEditingError,
} from 'containers/App/actions';
import { EDIT_USER, LOAD_USER } from 'containers/App/constants';
import request from 'utils/request';

/**
 * Github user request/response handler
 */
export function* getUser({ uid }) {
  // Select username from store
  const requestURL = `http://localhost:5000/users/${uid}`;

  try {
    // Call our request helper (see 'utils/request')
    const user = yield call(request, requestURL);
    yield put(userLoaded(user));
  } catch (err) {
    const e = yield err;
    yield put(userLoadingError(e));
  }
}

export function* editUser({ user }) {
  // Select username from store
  const requestURL = `http://localhost:5000/users/${user.id}`;

  let edited;

  try {
    // Call our request helper (see 'utils/request')
    edited = yield call(request, requestURL, {
      method: 'PUT',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'Application/json',
      },
    });
    yield put(userEdited(edited));
  } catch (err) {
    const e = yield err;
    yield put(userEditingError(e));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* userData() {
  // Watches for LOAD_USER actions and calls getUser when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(LOAD_USER, getUser);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* editUserData() {
  // Watches for EDIT_USER and calls editUser
  const watcher = yield takeLatest(EDIT_USER, editUser);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [userData, editUserData];
