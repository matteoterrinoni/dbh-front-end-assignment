import React from 'react';

import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';

import messages from './messages';

const Title = ({ username }) => (
  <H1>
    <FormattedMessage {...messages.header} values={{ username }} />
  </H1>
);

Title.propTypes = {
  username: PropTypes.any.isRequired,
};

export default Title;
