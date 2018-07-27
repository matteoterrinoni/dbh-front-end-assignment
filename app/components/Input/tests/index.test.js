import React from 'react';
import { shallow } from 'enzyme';

import Input from '../';

describe('<Input />', () => {
  it('should render an <input> tag', () => {
    const renderedComponent = shallow(<Input />);
    expect(renderedComponent.type()).toEqual('input');
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<Input id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<Input attribute={'test'} />);
    expect(renderedComponent.props().attribute).toBeUndefined();
  });
});
