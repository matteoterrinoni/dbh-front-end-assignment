import React from 'react';
import { mount } from 'enzyme';

import HomeLink from '../homeLink';

describe('<HomeLink />', () => {
  it('should render a div', () => {
    const renderedComponent = mount(<HomeLink />);
    expect(renderedComponent.find('a').length).toEqual(1);
  });
});
