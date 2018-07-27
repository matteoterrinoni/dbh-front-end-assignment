import React from 'react';

import PropTypes from 'prop-types';
import { UserPropType } from 'containers/UserPage/model';
import UserListItem from './item';

const UsersList = ({ users }) => (
  <div className="users-list">
    {users && users.map((user) => <UserListItem key={user.id} user={user} />)}
  </div>
);

UsersList.propTypes = {
  users: PropTypes.oneOfType([PropTypes.arrayOf(UserPropType), PropTypes.bool]),
};

export default UsersList;
