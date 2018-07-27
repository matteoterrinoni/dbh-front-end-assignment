/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectUsers } from 'containers/App/selectors';

import { loadUsers } from 'containers/App/actions';

import Page from 'components/Page';
import UsersList from 'components/UsersList';

import H1 from 'components/H1';

import messages from './messages';

export class HomePage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.loadUsers();
  }

  render() {
    const { users } = this.props;

    return (
      <Page>
        <Helmet>
          <title>Home Page</title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        <H1>
          <FormattedMessage {...messages.title} />
        </H1>
        <UsersList users={users} />
      </Page>
    );
  }
}

HomePage.propTypes = {
  users: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  loadUsers: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    loadUsers: () => dispatch(loadUsers()),
  };
}

const mapStateToProps = createStructuredSelector({
  users: makeSelectUsers(),
});

// Wrap the component to inject dispatch and state into it
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
