import React from 'react';
import Login from './index';
import {fireEvent, render} from '@testing-library/react-native';
import {performSignIn} from './Wrapper/LoginHelper';

jest.mock('./Wrapper/LoginHelper', () => ({
  performSignIn: jest.fn(),
}));

// jest.mock('../../src/components/ErrorBoundary', () => jest.fn().mockReturnValue(null));
jest.mock('react-redux', () => {
  return {
    ...jest.requireActual<object>('react-redux'),
    Provider: jest.fn(),
    useSelector: jest.fn(fn => fn()),
    useDispatch: () => jest.fn().mockImplementation(() => Promise.resolve()),
  };
});

// jest.mock('../../src/navigation/root', () => 'navigationRef');

describe('Login screen', () => {
  it('Login screen', () => {
    const tree = render(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Should render correctly', () => {
    const wrapper = render(<Login />);
    wrapper.getByTestId('Login Component');
  });

  test('Render Password', () => {
    const wrapper = render(<Login />);
    wrapper.getByTestId('Email');
  });

  test('Render Confirm Password', () => {
    const wrapper = render(<Login />);
    wrapper.getByTestId('PasswordTextField');
  });

  test('Render ForgotButton', () => {
    const wrapper = render(<Login />);
    wrapper.getByTestId('ForgotButton');
  });

  test('Render LoginButton', () => {
    const wrapper = render(<Login />);
    wrapper.getByTestId('LoginButton');
  });

  test('Render SignIn Click', () => {
    const wrapper = render(<Login />);
    fireEvent.changeText(wrapper.getByTestId('Email'), 'admin@mail.com');
    fireEvent.changeText(wrapper.getByTestId('PasswordTextField'), 'Admin123');
    fireEvent.press(wrapper.getByTestId('LoginButton'));
    expect(performSignIn).toHaveBeenCalled();
  });
});
