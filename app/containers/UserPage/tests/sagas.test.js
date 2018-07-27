/**
 * Tests for UserPage sagas
 */

import { take, put, cancel, takeLatest } from 'redux-saga/effects';
import { createMockTask } from 'redux-saga/utils';
import { LOCATION_CHANGE } from 'react-router-redux';

import { LOAD_USER, EDIT_USER } from 'containers/App/constants';
import {
  userLoaded,
  userLoadingError,
  userEdited,
  userEditingError,
} from 'containers/App/actions';

import { getUser, userData, editUser, editUserData } from '../sagas';

/* eslint-disable redux-saga/yield-effects */
describe('getUser Saga', () => {
  let getUserGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getUserGenerator = getUser({ uid: 1 });

    const callDescriptor = getUserGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the userLoaded action if it requests the data successfully', () => {
    const response = [
      {
        id: 1,
      },
    ];
    const putDescriptor = getUserGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(userLoaded(response)));
  });

  it('should call the usersLoadingError action if the response errors', () => {
    const response = new Error('Some error');
    const error = getUserGenerator.throw(response).value;
    const putDescriptor = getUserGenerator.next(error).value;
    expect(putDescriptor).toEqual(put(userLoadingError(response)));
  });
});

/* eslint-disable redux-saga/yield-effects */
describe('editUser Saga', () => {
  let editUserGenerator;

  const user = { id: 1 };

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    editUserGenerator = editUser({ user });

    const callDescriptor = editUserGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the userEdited action if it requests the data successfully', () => {
    const response = user;
    const putDescriptor = editUserGenerator.next(user).value;
    expect(putDescriptor).toEqual(put(userEdited(response)));
  });

  it('should call the usersEditingError action if the response errors', () => {
    const response = new Error('Some error');
    const error = editUserGenerator.throw(response).value;
    const putDescriptor = editUserGenerator.next(error).value;
    expect(putDescriptor).toEqual(put(userEditingError(response)));
  });
});

describe('userData Saga', () => {
  const userDataSaga = userData();
  const mockedTask = createMockTask();

  it('should start task to watch for LOAD_USER action', () => {
    const takeLatestDescriptor = userDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_USER, getUser));
  });

  it('should yield until LOCATION_CHANGE action', () => {
    const takeDescriptor = userDataSaga.next(mockedTask).value;
    expect(takeDescriptor).toEqual(take(LOCATION_CHANGE));
  });

  it('should cancel the forked task when LOCATION_CHANGE happens', () => {
    const cancelDescriptor = userDataSaga.next().value;
    expect(cancelDescriptor).toEqual(cancel(mockedTask));
  });
});

describe('editUserData Saga', () => {
  const editUserDataSaga = editUserData();
  const mockedTask = createMockTask();

  it('should start task to watch for EDIT_USER action', () => {
    const takeLatestDescriptor = editUserDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(EDIT_USER, editUser));
  });

  it('should yield until LOCATION_CHANGE action', () => {
    const takeDescriptor = editUserDataSaga.next(mockedTask).value;
    expect(takeDescriptor).toEqual(take(LOCATION_CHANGE));
  });

  it('should cancel the forked task when LOCATION_CHANGE happens', () => {
    const cancelDescriptor = editUserDataSaga.next().value;
    expect(cancelDescriptor).toEqual(cancel(mockedTask));
  });
});
