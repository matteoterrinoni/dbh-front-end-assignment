/**
 *
 * Boolean
 *
 */

import React from 'react';

import Input from 'components/Input';

import { FieldPropTypes } from './model';

import FieldWrapper from './wrapper';

function Default(props) {
  const { type, disabled, value, onChange } = props;
  return (
    <FieldWrapper {...props}>
      <Input
        onChange={(e) => onChange(e.target.value)}
        value={value}
        disabled={disabled}
        type={type}
      />
    </FieldWrapper>
  );
}

Default.propTypes = FieldPropTypes;

export default Default;
