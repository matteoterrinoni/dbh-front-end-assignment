/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { Users } from '../UserPage/model';

const selectGlobal = (state) => state.get('global');

const makeSelectLoading = () =>
  createSelector(selectGlobal, (globalState) => globalState.get('loading'));

const makeSelectError = () =>
  createSelector(selectGlobal, (globalState) => globalState.get('error'));

const makeSelectUsers = () =>
  createSelector(selectGlobal, (globalState) =>
    globalState.getIn(['data', 'users'])
  );

const makeSelectUser = (uid) =>
  createSelector(selectGlobal, (globalState) =>
    Users(globalState.getIn(['data', 'users'])).find(uid)
  );

const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

export {
  selectGlobal,
  makeSelectLoading,
  makeSelectError,
  makeSelectUsers,
  makeSelectUser,
  makeSelectLocationState,
};
