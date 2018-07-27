import PropTypes from 'prop-types';

import UserSchema from '../../../server/models/user';

export const getUserProps = () => {
  const props = UserSchema.properties.users.items.properties;
  const required = UserSchema.properties.users.items.required;

  return Object.keys(props).map((k) => {
    const p = props[k];
    return {
      id: k,
      name: p.name || k,
      required: required.indexOf(p.name) > -1,
      ...p,
    };
  });
};

export const Users = (lUsers) => {
  const users = lUsers || [];
  return {
    find: (id) => users.find((u) => u.id == id), // eslint-disable-line eqeqeq
    findIndex: (id) => users.findIndex((u) => u.id == id), // eslint-disable-line eqeqeq
    setUserAtIndex: (i, user) =>
      Users(users.map((u, ui) => (ui === i ? user : u))),
    set: (user) => {
      const i = Users(users).findIndex(user.id);
      return i >= 0
        ? Users(users).setUserAtIndex(i, user)
        : Users(users.concat([user]));
    },
    users,
  };
};

export const UserPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  numberOfBookings: PropTypes.any,
  isPremiumUser: PropTypes.bool,
  premiumCode: PropTypes.number,
});
