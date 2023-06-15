import * as React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import {store} from './src/store';
import {navigationRef} from './src/navigation/root';

import Navigation from './src/navigation';
import ErrorBoundary from './src/components/ErrorBoundary';
import ErrorWithRestartBtn from './src/components/ErrorWithRestartBtn';

function App() {
  const handleError = () => {
    // log the error
  };
  return (
    <ErrorBoundary onError={handleError} FallbackComponent={ErrorWithRestartBtn}>
      <NavigationContainer ref={navigationRef}>
        <Provider store={store}>
          <Navigation />
        </Provider>
      </NavigationContainer>
    </ErrorBoundary>
  );
}

//Uncomment below two lines for OTA after adding env vars

// const codePushOptions = {checkFrequency: codePush.CheckFrequency.ON_APP_RESUME};
// App = codePush(codePushOptions)(App);

export default App;
