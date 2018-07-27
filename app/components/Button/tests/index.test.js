import React from 'react';
import { shallow } from 'enzyme';

import Button from '../';

describe('<Button />', () => {
  it('should render an <button> tag', () => {
    const renderedComponent = shallow(<Button />);
    expect(renderedComponent.type()).toEqual('button');
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<Button id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<Button attribute={'test'} />);
    expect(renderedComponent.props().attribute).toBeUndefined();
  });
});
