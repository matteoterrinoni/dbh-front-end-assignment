import PropTypes from 'prop-types';
import { ErrorPropType } from './error';

const ApiErrorPropTypeValue = PropTypes.shape({
  success: PropTypes.bool,
  message: PropTypes.string.isRequired,
  errors: PropTypes.objectOf(ErrorPropType),
});

/**
 * Generic api error response proptype definition
 */
export const ApiErrorPropType = PropTypes.oneOfType([
  PropTypes.bool,
  ApiErrorPropTypeValue,
]);
