import PropTypes from 'prop-types';

import { ErrorPropType } from 'containers/App/model/error';

export const FieldPropTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any,
  disabled: PropTypes.bool,
  error: ErrorPropType,
};
