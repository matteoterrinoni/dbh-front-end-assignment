/**
 * Tests for HomePage sagas
 */

import { cancel, take, put, takeLatest } from 'redux-saga/effects';
import { createMockTask } from 'redux-saga/lib/utils';

import { LOCATION_CHANGE } from 'react-router-redux';

import { LOAD_USERS } from 'containers/App/constants';
import { usersLoaded, usersLoadingError } from 'containers/App/actions';

import { getUsers, usersData } from '../sagas';

/* eslint-disable redux-saga/yield-effects */
describe('getUsers Saga', () => {
  let getUsersGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getUsersGenerator = getUsers();

    const selectDescriptor = getUsersGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot([]);
  });

  it('should dispatch the usersLoaded action if it requests the data successfully', () => {
    const response = [
      {
        id: 1,
      },
      {
        id: 2,
      },
    ];

    const putDescriptor = getUsersGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(usersLoaded(response)));
  });

  it('should call the usersLoadingError action if the response errors', () => {
    const response = new Error('Some error');
    const error = getUsersGenerator.throw(response).value;
    const putDescriptor = getUsersGenerator.next(error).value;
    expect(putDescriptor).toEqual(put(usersLoadingError(response)));
  });
});

describe('usersDataSaga Saga', () => {
  const usersDataSaga = usersData();
  const mockedTask = createMockTask();

  it('should start task to watch for LOAD_USERS action', () => {
    const takeLatestDescriptor = usersDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_USERS, getUsers));
  });

  it('should yield until LOCATION_CHANGE action', () => {
    const takeDescriptor = usersDataSaga.next(mockedTask).value;
    expect(takeDescriptor).toEqual(take(LOCATION_CHANGE));
  });

  it('should cancel the forked task when LOCATION_CHANGE happens', () => {
    const cancelDescriptor = usersDataSaga.next().value;
    expect(cancelDescriptor).toEqual(cancel(mockedTask));
  });
});
