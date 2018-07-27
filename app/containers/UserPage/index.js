import React from 'react';

import PropTypes from 'prop-types';

import Helmet from 'react-helmet';

import { connect } from 'react-redux';

import { loadUser as dispatchloadUser } from 'containers/App/actions';

import { makeSelectUser, makeSelectError } from 'containers/App/selectors';

import PageError from 'components/PageError';

import { ApiErrorPropType } from 'containers/App/model/apiError';

import Editor from './editor';
import { UserPropType } from './model';
import UserPageStyled from './styled';
import HomeLink from './homeLink';
import Title from './title';

export class UserPage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    uid: PropTypes.any.isRequired,
    loadUser: PropTypes.func.isRequired,
    error: ApiErrorPropType,
    user: PropTypes.oneOfType([UserPropType, PropTypes.bool]),
  };

  componentWillMount() {
    const { uid, loadUser } = this.props;
    loadUser(uid);
  }

  render() {
    const { uid, error, user } = this.props;
    const username = (user && user.username) || uid;

    return (
      <UserPageStyled>
        <Helmet
          title="User page"
          meta={[
            {
              name: 'description',
              content: 'A React.js Boilerplate user page',
            },
          ]}
        />

        <HomeLink />

        <Title username={username} />

        <PageError error={error} />

        <Editor user={user} error={error} />
      </UserPageStyled>
    );
  }
}

const mapStateToProps = (state, { params }) => ({
  uid: params.uid,
  user: makeSelectUser(params.uid)(state),
  error: makeSelectError()(state),
});

export function mapDispatchToProps(dispatch) {
  return {
    loadUser: (uid) => dispatch(dispatchloadUser(uid)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
