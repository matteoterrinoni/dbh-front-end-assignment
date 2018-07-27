/**
 *
 * Boolean
 *
 */

import React from 'react';

import { FieldPropTypes } from './model';

import FieldWrapper from './wrapper';
import Button from '../Button';

const Switch = Button.extend`
  background: #f44336;
  color: white;

  &:hover {
    background: #f44336;
  }

  &.active {
    background: #8bc34a;

    &:hover {
      background: #8bc34a;
    }
  }
`;

const getValue = (value) => value || false;

class Boolean extends React.Component {
  static propTypes = FieldPropTypes;

  constructor(props) {
    super(props);

    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick(e) {
    e.preventDefault();
    this.props.onChange(!getValue(this.props.value));
  }

  render() {
    const { disabled, value } = this.props;

    const val = getValue(value);

    return (
      <FieldWrapper {...this.props}>
        <Switch
          type="button"
          className={val ? 'active' : ''}
          onClick={this.buttonClick}
          disabled={disabled}
        >
          {JSON.stringify(val)}
        </Switch>
      </FieldWrapper>
    );
  }
}

export default Boolean;
