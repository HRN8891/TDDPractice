import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import SignIn from '../../src/screens/SignIn';
import {store} from '../../src/store/index';
import {Provider} from 'react-redux';

describe('SignIn screen', () => {
  it('SignIn screen', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <SignIn />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
