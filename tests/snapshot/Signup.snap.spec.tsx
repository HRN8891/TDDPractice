import React from 'react';
import SignUp from '../../src/screens/SignUp';
import {fireEvent, render} from '@testing-library/react-native';
import ErrorBoundary from '../../src/components/ErrorBoundary';
import {Provider} from 'react-redux';
import {View, Alert} from 'react-native';

jest.mock('../../src/components/ErrorBoundary', () => jest.fn().mockReturnValue(null));
jest.mock('react-redux', () => {
  return {
    ...jest.requireActual<object>('react-redux'),
    Provider: jest.fn(),
    useSelector: jest.fn(fn => fn()),
    useDispatch: () => jest.fn().mockImplementation(() => Promise.resolve()),
  };
});

jest.mock('../../src/navigation/root', () => 'navigationRef');

describe('SignUp screen', () => {
  it('SignUp screen', () => {
    (Provider as jest.Mock).mockImplementationOnce(({children}) => children);
    (ErrorBoundary as jest.Mock).mockReturnValue(<View />);
    const tree = render(<SignUp />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('SignUp screen Test', () => {
  test('Should render correctly', () => {
    const wrapper = render(<SignUp />);
    wrapper.getByTestId('Sigunup Component');
  });

  test('Render Email', () => {
    const wrapper = render(<SignUp />);
    wrapper.getByTestId('Email');
  });

  test('Render Password', () => {
    const wrapper = render(<SignUp />);
    wrapper.getByTestId('Password');
  });

  test('Render Confirm Password', () => {
    const wrapper = render(<SignUp />);
    wrapper.getByTestId('ConfrimPassword');
  });

  test('Render Email Error', () => {
    const wrapper = render(<SignUp />);
    fireEvent.press(wrapper.getByRole('button', {name: 'Sign Up'}));
    // wrapper.getByTestId('Error');
    // expect(await wrapper.findByRole('alert')).toHaveTextContent('Incorrect username or password');
    expect(Alert.alert).toHaveBeenCalledWith('Email is required'); // passes
  });

  test('Render Password Error', () => {
    const wrapper = render(<SignUp />);
    // const input = wrapper.getByTestId('Email');
    // fireEvent.changeText(input, 'admin@gmail.com');
    // expect(input.props.value).toBe('admin@gmail.com');
    fireEvent.changeText(wrapper.getByTestId('Email'), 'admin@gmail.com');
    fireEvent.press(wrapper.getByRole('button', {name: 'Sign Up'}));
    expect(Alert.alert).toHaveBeenCalledWith('Password is required'); // passes
  });

  test('Password is required', () => {
    const wrapper = render(<SignUp />);
    fireEvent.changeText(wrapper.getByTestId('Email'), 'admin@mail.com');
    fireEvent.press(wrapper.getByRole('button', {name: 'Sign Up'}));
    expect(Alert.alert).toHaveBeenCalledWith('Password is required'); // passes
  });

  test('Password does not match', () => {
    const wrapper = render(<SignUp />);
    fireEvent.changeText(wrapper.getByTestId('Email'), 'admin@gmail.com');
    fireEvent.changeText(wrapper.getByTestId('Password'), 'Admin123');
    fireEvent.changeText(wrapper.getByTestId('ConfrimPassword'), 'Admin12377');
    fireEvent.press(wrapper.getByRole('button', {name: 'Sign Up'}));
    expect(Alert.alert).toHaveBeenCalledWith('Password & Confirm Password do not match'); // passes
  });

  test('Render Confirm Password Error', () => {
    const wrapper = render(<SignUp />);
    fireEvent.changeText(wrapper.getByTestId('Email'), 'admin@gmail.com');
    fireEvent.changeText(wrapper.getByTestId('Password'), 'Admin123');
    fireEvent.press(wrapper.getByRole('button', {name: 'Sign Up'}));
    expect(Alert.alert).toHaveBeenCalledWith('Confirm Password is required'); // passes
  });
});
