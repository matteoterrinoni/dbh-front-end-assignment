import React from 'react';
import { shallow } from 'enzyme';

import Label from '../';

describe('<Label />', () => {
  it('should render an <label> tag', () => {
    const renderedComponent = shallow(<Label />);
    expect(renderedComponent.type()).toEqual('label');
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<Label id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<Label attribute={'test'} />);
    expect(renderedComponent.props.attribute).toBeUndefined();
  });
});
