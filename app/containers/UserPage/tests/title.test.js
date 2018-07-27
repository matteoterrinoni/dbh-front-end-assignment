import React from 'react';
import { mount } from 'enzyme';

import { IntlProvider } from 'react-intl';

import Title from '../title';

describe('<Title />', () => {
  it('should render a h1 with the right text', () => {
    const title = 'aaaa';
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <Title username={title} />
      </IntlProvider>
    );
    expect(renderedComponent.find('h1').length).toEqual(1);
    expect(
      renderedComponent
        .find('h1')
        .html()
        .indexOf(title)
    ).toBeGreaterThan(-1);
  });
});
