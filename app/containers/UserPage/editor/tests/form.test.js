import React from 'react';
import { shallow, mount } from 'enzyme';

import { IntlProvider } from 'react-intl';

import Form from '../form';

let formProps;

const onSubmit = jest.fn();
const userProps = [
  {
    id: 'username',
    type: 'string',
    name: 'Username',
  },
];

const user = {
  id: 1,
  username: 'aaa',
  email: 'aaa',
};
const error = false;
const onChangeUserProp = jest.fn();
const isDirty = true;

describe('<Form />', () => {
  beforeEach(() => {
    formProps = {
      onSubmit,
      userProps,
      user,
      error,
      onChangeUserProp,
      isDirty,
    };
  });

  it('should render a form if user is set', () => {
    const renderedComponent = shallow(<Form {...formProps} />);
    expect(renderedComponent.find('form').length).toEqual(1);
  });

  it('should render a form if user is set', () => {
    formProps.user = undefined;
    const renderedComponent = shallow(<Form {...formProps} />);
    expect(renderedComponent.find('form').length).toEqual(0);
  });

  it('should render a button', () => {
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <Form {...formProps} />
      </IntlProvider>
    );
    expect(renderedComponent.find('button').length).toEqual(1);
    expect(renderedComponent.find('button').props().disabled).toBe(false);
  });

  it('should render a button disabled if not dirty', () => {
    formProps.isDirty = false;

    const renderedComponent = mount(
      <IntlProvider locale="en">
        <Form {...formProps} />
      </IntlProvider>
    );

    expect(renderedComponent.find('button').props().disabled).toBe(true);
  });
});
