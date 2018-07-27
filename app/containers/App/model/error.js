import PropTypes from 'prop-types';

/**
 * Generic error proptype definition
 */
export const ErrorPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.bool,
]);
