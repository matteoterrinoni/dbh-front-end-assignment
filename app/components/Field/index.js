/**
 *
 * Field
 *
 */

import React from 'react';

import Boolean from './boolean';

import Default from './default';

import { FieldPropTypes } from './model';

function Field(props) {
  const { type } = props;

  switch (type) {
    case 'boolean':
      return <Boolean {...props} />;
    default:
      return <Default {...props} />;
  }
}

Field.propTypes = FieldPropTypes;

export default Field;
