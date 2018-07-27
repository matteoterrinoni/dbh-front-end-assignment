/**
 * Test the Editor
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { IntlProvider } from 'react-intl';

import { editUser } from 'containers/App/actions';

import { Editor, mapDispatchToProps, isDirty } from '../';

let editorProps;

const user = {
  id: 1,
  username: 'aaa',
  email: 'aaa',
};

describe('<Editor />', () => {
  beforeEach(() => {
    editorProps = {
      user,
      error: false,
      editUser: jest.fn,
    };
  });

  it('should render the user Form', () => {
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <Editor {...editorProps} />
      </IntlProvider>
    );
    expect(renderedComponent.find('form').length).toBe(1);
  });

  it('should launch editUser when submit', () => {
    const editUserFn = jest.fn();
    editorProps.editUser = editUserFn;

    const event = { preventDefault: () => {} };
    const Comp = shallow(<Editor {...editorProps} />);
    Comp.instance().submit(event);
    expect(editUserFn).toHaveBeenCalledTimes(1);
  });

  it('should launch setUser when launch changeUserprop', () => {
    const newUser = {
      ...user,
      username: 'bbb',
    };
    const setUser = jest.fn();
    const Comp = shallow(<Editor {...editorProps} />);
    Comp.instance().setUser = setUser;
    Comp.instance().changeUserProp('username', newUser.username);

    expect(setUser).toHaveBeenCalledTimes(1);
    expect(setUser).toHaveBeenCalledWith(newUser);
  });

  it('should set user when launching setuser', () => {
    const newUser = {
      ...user,
      username: 'bbb',
    };
    const setState = jest.fn();
    const Comp = shallow(<Editor {...editorProps} />);
    Comp.instance().setState = setState;
    Comp.instance().setUser(newUser);

    expect(setState).toHaveBeenCalledTimes(1);
    expect(setState).toHaveBeenCalledWith({ user: newUser });
  });

  it('should launch setUser when changing the user from props', () => {
    const newUser = {
      ...user,
      username: 'bbb',
    };

    const newProps = {
      ...editorProps,
      user: newUser,
    };

    const setUser = jest.fn();
    const Comp = shallow(<Editor {...editorProps} />);
    Comp.instance().setUser = setUser;

    Comp.setProps(newProps);
    expect(setUser).toHaveBeenCalledTimes(1);
    Comp.setProps(newProps);
    expect(setUser).toHaveBeenCalledTimes(1);
  });

  it('isDirty should compare correctly', () => {
    const newUser = {
      ...user,
      username: 'bbb',
    };
    expect(isDirty(user, newUser)).toBe(true);
  });

  describe('mapDispatchToProps', () => {
    describe('editUser', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.editUser).toBeDefined();
      });

      it('should dispatch editUser when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.editUser(user);
        expect(dispatch).toHaveBeenCalledWith(editUser(user));
      });
    });
  });
});
