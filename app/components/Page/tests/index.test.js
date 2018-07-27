import React from 'react';
import { shallow } from 'enzyme';

import Page from '../';

describe('<Page />', () => {
  it('should render an <div> tag', () => {
    const renderedComponent = shallow(<Page />);
    expect(renderedComponent.type()).toEqual('div');
  });
});
