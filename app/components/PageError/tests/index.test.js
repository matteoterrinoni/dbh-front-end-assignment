import React from 'react';
import { mount } from 'enzyme';

import PageError from '../';

let pageErrorProps;
describe('<PageError />', () => {
  beforeEach(() => {
    pageErrorProps = {
      error: {
        message: 'aaa',
      },
    };
  });

  it('should render page-error div if with Error', () => {
    const renderedComponent = mount(<PageError {...pageErrorProps} />);
    expect(renderedComponent.find('.page-error').length).toEqual(1);
  });

  it('should not render page-error div if without Error', () => {
    pageErrorProps.error = false;
    const renderedComponent = mount(<PageError {...pageErrorProps} />);
    expect(renderedComponent.find('.page-error').length).toEqual(0);
  });
});
