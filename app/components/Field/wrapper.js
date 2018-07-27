/**
 *
 * Field
 *
 */

import React from 'react';

import PropTypes from 'prop-types';

import styled from 'styled-components';

import Label from 'components/Label';

import { FieldPropTypes } from './model';

const StyledWrapper = styled.div`
  margin-bottom: 20px;

  .field-required {
    font-size: small;
    margin-left: -8px;
    position: absolute;
    font-weight: bold;
  }

  .error-comment {
    color: #f44336;
  }
`;

function FieldWrapper({ children, ...props }) {
  const { name, required, error } = props;

  return (
    <StyledWrapper className="field-wrapper">
      {required ? <span className="field-required">*</span> : ''}

      <Label>{name}</Label>

      <div className="field-content">{children}</div>

      {error && <div className="error-comment">{error}</div>}
    </StyledWrapper>
  );
}

FieldWrapper.propTypes = {
  ...FieldPropTypes,
  children: PropTypes.any,
};

export default FieldWrapper;
