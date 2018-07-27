import React from 'react';

import Field from 'components/Field';

import { FieldPropTypes } from 'components/Field/model';

import Label from './label';
import { UserPropType } from '../model';

const FieldRenderer = ({ user, name, ...props }) => {
  const fieldProps = {
    value: user[props.id],
    name: <Label {...props} />,
    ...props,
  };

  switch (fieldProps.id) {
    case 'id':
      return null;
    case 'premiumCode':
      return !user.isPremiumUser ? null : <Field {...fieldProps} />;
    default:
      return <Field {...fieldProps} />;
  }
};

FieldRenderer.propTypes = {
  ...FieldPropTypes,
  user: UserPropType,
};

export default FieldRenderer;
