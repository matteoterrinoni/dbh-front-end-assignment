import React from 'react';

import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';

import labels from './messages';

const Label = (props) => {
  const label = labels[props.id] || props.name;
  return <FormattedMessage {...label} />;
};

Label.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
};

export default Label;
