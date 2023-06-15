import React, {useState} from 'react';
import {TouchableOpacity, View, SafeAreaView, Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';

import CTextBox from '../../components/CTextBox';
import CButton from '../../components/CButton';
import CLabel from '../../components/CLabel';
import Loader from '../../components/Loader';

import style from './style';
import config from '../../constants/config';
import {strings} from '../../locales/i18n';
import {SCREEN_NAMES} from '../../navigation/constants';
import {validateEmail} from '../../utilities/misc';
import {setSecureStorageItem, storageKeys} from '../../utilities/storageUtils';
import {useSignInMutation} from 'store/auth/service';
import {saveUserDetails} from 'store/auth/slice';
import {SignInScreenProps} from 'navigation/types';

function SignIn({navigation}: SignInScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [signIn, {isLoading}] = useSignInMutation();
  const dispatch = useDispatch();

  const handleSignIn = async () => {
    try {
      const trimmedEmail = email.trim();
      const trimmedPassword = password.trim();

      if (!trimmedEmail || !trimmedPassword) {
        return Alert.alert('Email and password is required');
      }
      if (!validateEmail(trimmedEmail)) {
        return Alert.alert('Please enter valid Email');
      }

      const data = await signIn({
        email: trimmedEmail,
        password: trimmedPassword,
      }).unwrap();
      await setSecureStorageItem(storageKeys.userData, data);
      dispatch(saveUserDetails(data));
    } catch (error) {
      Alert.alert(strings('common.something_went_wrong'));
    }
  };

  const onSignUpPress = () => {
    navigation.navigate(SCREEN_NAMES.SignUp);
  };

  return (
    <SafeAreaView style={style.screen}>
      <CLabel style={style.bottomLabelStyle}>{`API_BASE_URL: ${config.API_BASE_URL || ''}`}</CLabel>
      <KeyboardAwareScrollView
        contentContainerStyle={style.all}
        keyboardShouldPersistTaps={'handled'}>
        <CTextBox
          placeholder={strings('signIn.email')}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <CTextBox
          placeholder={strings('signIn.password')}
          value={password}
          onChangeText={setPassword}
          hidePassword={true}
          returnKeyType={'done'}
        />
        <CButton onPress={handleSignIn} text={strings('signIn.signIn')} />
      </KeyboardAwareScrollView>

      <View style={style.footer}>
        <CLabel style={style.bottomLabelStyle}>{strings('signIn.bottomText')}</CLabel>
        <TouchableOpacity style={style.buttonContainer} onPress={onSignUpPress}>
          <CLabel style={style.signUpText}>{strings('signIn.bottomText2')}</CLabel>
        </TouchableOpacity>
      </View>

      <Loader loading={isLoading} absolute />
    </SafeAreaView>
  );
}

export default SignIn;
