/*
*  Form Comp
*/

import React from 'react';

import PropTypes from 'prop-types';

import Button from 'components/Button';

import FieldRenderer from 'containers/UserPage/FieldRenderer';

import { UserPropType } from 'containers/UserPage/model';

import { ApiErrorPropType } from 'containers/App/model/apiError';

const Form = ({
  onSubmit,
  userProps,
  user,
  error,
  onChangeUserProp,
  isDirty,
}) =>
  !user ? null : (
    <form onSubmit={onSubmit}>
      {userProps.map((p) => {
        const e = error && error.errors[p.id];

        return (
          <FieldRenderer
            onChange={(val) => onChangeUserProp(p.id, val)}
            user={user}
            key={p.id}
            error={e}
            {...p}
          />
        );
      })}
      <Button disabled={!isDirty} type="submit">
        Submit
      </Button>
    </form>
  );

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  userProps: PropTypes.any,
  user: UserPropType,
  error: ApiErrorPropType,
  onChangeUserProp: PropTypes.func.isRequired,
  isDirty: PropTypes.bool,
};

export default Form;
