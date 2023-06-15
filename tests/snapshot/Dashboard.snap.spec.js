import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Dashboard from '../../src/screens/Dashboard';
import {store} from '../../src/store/index';
import {Provider} from 'react-redux';

describe('Dashboard screen', () => {
  it('Dashboard screen', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Dashboard />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
