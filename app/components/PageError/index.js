import React from 'react';

import { ApiErrorPropType } from 'containers/App/model/apiError';

const PageError = ({ error }) =>
  error && <div className="page-error">{error.message}</div>;

PageError.propTypes = {
  error: ApiErrorPropType,
};

export default PageError;
