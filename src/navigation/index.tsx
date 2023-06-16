import React, {useEffect} from 'react';
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import type {StackNavigationOptions} from '@react-navigation/stack';

import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Dashboard from '../screens/Dashboard';

import {SCREEN_NAMES} from './constants';
import {useAppDispatch, useAppSelector} from '../store';
import {saveUserDetails} from '../store/auth/slice';
import {getSecureStorageItem, storageKeys} from '../utilities/storageUtils';
import {AuthStackParamList, HomeStackParamList} from './types';
import {IUserApiResponse} from 'store/types';
import Login from 'screens/Login';
import WelcomeScreen from 'screens/WelcomeScreen';
import {goBack} from './root';
import {BackIcon} from '../utilities/Constant';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import Register from 'screens/Register';

const HomeStack = createStackNavigator<HomeStackParamList>();
const AuthStack = createStackNavigator<AuthStackParamList>();

const options: StackNavigationOptions = {
  headerShown: false,
};

function AuthNavigator() {
  return (
    <AuthStack.Navigator
      initialRouteName={SCREEN_NAMES.Welcome}
      screenOptions={() => {
        return {
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          title: '',
          headerLeft: () => {
            return (
              <TouchableOpacity style={style.backButtonStyle} onPress={goBack}>
                <BackIcon height={17} width={17} />
              </TouchableOpacity>
            );
          },
        };
      }}>
      <AuthStack.Screen name={SCREEN_NAMES.Welcome} component={WelcomeScreen} options={options} />
      <AuthStack.Screen name={SCREEN_NAMES.Login} component={Login} />
      <AuthStack.Screen name={SCREEN_NAMES.SignIn} component={SignIn} />
      <AuthStack.Screen name={SCREEN_NAMES.Register} component={Register} options={options} />
      <AuthStack.Screen name={SCREEN_NAMES.SignUp} component={SignUp} options={options} />
    </AuthStack.Navigator>
  );
}

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name={SCREEN_NAMES.Dashboard} component={Dashboard} options={options} />
    </HomeStack.Navigator>
  );
}

function MainNavigator() {
  const userData = useAppSelector(state => state.auth.userData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getSecureStorageItem(storageKeys.userData)
      .then((localUserData: IUserApiResponse) => {
        if (localUserData) {
          dispatch(saveUserDetails(localUserData));
        }
      })
      .catch(() => {});
  }, [dispatch]);

  return userData.email ? <HomeNavigator /> : <AuthNavigator />;
}

const style = StyleSheet.create({
  backButtonStyle: {
    paddingLeft: scale(18),
  },
});

export default MainNavigator;
