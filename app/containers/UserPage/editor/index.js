import React from 'react';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { editUser } from 'containers/App/actions';

import { ApiErrorPropType } from 'containers/App/model/apiError';

import { getUserProps, UserPropType } from '../model';

import Form from './form';

const userProps = getUserProps();

export const isDirty = (a, b) => JSON.stringify(a) !== JSON.stringify(b);

export class Editor extends React.Component {
  constructor(p) {
    super(p);

    this.state = {
      user: p.user,
    };

    this.changeUserProp = this.changeUserProp.bind(this);
    this.setUser = this.setUser.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentWillReceiveProps(n) {
    if (isDirty(n.user, this.props.user)) {
      this.setUser(n.user);
    }
  }

  setUser(user) {
    this.setState({
      user,
    });
  }

  changeUserProp(prop, value) {
    const user = { ...this.state.user };
    user[prop] = value;
    this.setUser(user);
  }

  submit(e) {
    e.preventDefault();
    this.props.editUser(this.state.user);
  }

  render() {
    const { error } = this.props;
    const { user } = this.state;

    return (
      <Form
        onChangeUserProp={this.changeUserProp}
        onSubmit={this.submit}
        user={user}
        userProps={userProps}
        error={error}
        isDirty={isDirty(user, this.props.user)}
      />
    );
  }
}

Editor.propTypes = {
  user: PropTypes.oneOfType([UserPropType, PropTypes.bool]),
  error: ApiErrorPropType,
  editUser: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    editUser: (user) => dispatch(editUser(user)),
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Editor);
