import {View, Image} from 'react-native';

import React from 'react';
import {strings} from '../../locales/i18n';
import Style from './style';
import CButton from '../../components/CButton';
import CLabel from '../../components/CLabel';
// import {GreenspaceLabel} from '../../components';
import {BackIcon, LOCAL_IMAGES_PATH} from 'utilities/Constant';
import {navigate} from 'navigation/root';
import {SCREEN_NAMES} from 'navigation/constants';

const {welcomeImage} = LOCAL_IMAGES_PATH;
const onSignupClick = () => {
  navigate(SCREEN_NAMES.Register);
};
const onLoginClick = () => {
  navigate(SCREEN_NAMES.Login);
};
const WelcomeScreen = () => {
  return (
    <View style={Style.container}>
      <View style={Style.upperView}>
        {/* <GreenspaceLabel /> */}
        <CLabel style={Style.subTitle}>{strings('welcomeScreen.subTitle')}</CLabel>
        <CLabel style={Style.description}>{strings('welcomeScreen.description')}</CLabel>
        <CButton
          testID="SignupButton"
          onPress={onSignupClick}
          buttonContainerStyle={Style.button}
          text={strings('signUp.signUp')}
        />
        <View style={Style.loginTextView}>
          <CLabel style={Style.alreadyAccount}>{strings('welcomeScreen.alreadyAccount')}</CLabel>
          <CLabel testID="LoginLabel" onPress={onLoginClick} style={Style.login}>
            {` ${strings('welcomeScreen.login')}`}
          </CLabel>
        </View>
      </View>
      <Image style={Style.imageStyle} source={welcomeImage} />
    </View>
  );
};

export default WelcomeScreen;
