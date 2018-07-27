import React from 'react';
import { mount, shallow } from 'enzyme';

import Boolean from '../boolean';

let booleanProps;
const onChange = jest.fn();
describe('<Boolean />', () => {
  beforeEach(() => {
    booleanProps = {
      onChange,
      disabled: false,
      value: true,
      id: 'aaa',
      type: 'boolean',
      name: 'aaa',
    };
  });

  it('should render a button', () => {
    const renderedComponent = mount(<Boolean {...booleanProps} />);
    expect(renderedComponent.find('button').length).toEqual(1);
  });

  it('should render a disabled button if disabled', () => {
    booleanProps.disabled = true;
    const renderedComponent = mount(<Boolean {...booleanProps} />);
    expect(renderedComponent.find('button').props().disabled).toEqual(true);
  });

  it('should render true if true', () => {
    const renderedComponent = mount(<Boolean {...booleanProps} />);
    expect(
      renderedComponent
        .find('button')
        .html()
        .indexOf('true') > -1
    ).toEqual(true);
  });

  it('should render false if false', () => {
    booleanProps.value = false;
    const renderedComponent = mount(<Boolean {...booleanProps} />);
    expect(
      renderedComponent
        .find('button')
        .html()
        .indexOf('false') > -1
    ).toEqual(true);
  });

  it('should render false if null', () => {
    booleanProps.value = null;
    const renderedComponent = mount(<Boolean {...booleanProps} />);
    expect(
      renderedComponent
        .find('button')
        .html()
        .indexOf('false') > -1
    ).toEqual(true);
  });

  it('should fire onChange when click', () => {
    const Comp = shallow(<Boolean {...booleanProps} />);
    Comp.instance().buttonClick({ preventDefault: jest.fn() });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(false);
  });
});
