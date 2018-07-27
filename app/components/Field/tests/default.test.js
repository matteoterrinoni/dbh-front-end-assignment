import React from 'react';
import { mount } from 'enzyme';

import Default from '../default';

let defaultProps;
const onChange = jest.fn();
describe('<Default />', () => {
  beforeEach(() => {
    defaultProps = {
      onChange,
      disabled: false,
      value: '',
      id: 'aaa',
      type: 'string',
      name: 'aaa',
    };
  });

  it('should render an Input', () => {
    const renderedComponent = mount(<Default {...defaultProps} />);
    expect(renderedComponent.find('input').length).toEqual(1);
  });

  it('should fire onChange when type', () => {
    const text = 'a';
    const Comp = mount(<Default {...defaultProps} />);
    Comp.find('input').simulate('change', { target: { value: text } });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(text);
  });
});
