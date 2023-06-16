import React, {useState} from 'react';
import {SafeAreaView, Alert, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';

import style from './style';
import {strings} from '../../locales/i18n';
import CTextBox from '../../components/CTextBox';
import CButton from '../../components/CButton';
import {setSecureStorageItem, storageKeys} from '../../utilities/storageUtils';
import {validateEmail} from '../../utilities/misc';
import {goBack} from '../../navigation/root';
import {useSignUpMutation} from 'store/auth/service';
import {saveUserDetails} from 'store/auth/slice';
import {useAppDispatch} from 'store';

const {alert} = Alert;

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signUp] = useSignUpMutation();
  const dispatch = useAppDispatch();

  const handleSignUp = async () => {
    try {
      const trimmedEmail = email.trim();
      const trimmedPassword = password.trim();
      const trimmedConfirmPassword = confirmPassword.trim();

      if (!trimmedEmail) {
        return alert('Email is required');
      }
      if (!validateEmail(trimmedEmail)) {
        return alert('Please enter valid Email');
      }
      if (!trimmedPassword) {
        return alert('Password is required');
      }
      if (!trimmedConfirmPassword) {
        return alert('Confirm Password is required');
      }
      if (trimmedPassword !== trimmedConfirmPassword) {
        return alert('Password & Confirm Password do not match');
      }

      const data = await signUp({
        email: trimmedEmail,
        password: trimmedPassword,
      }).unwrap();
      await setSecureStorageItem(storageKeys.userData, data);
      dispatch(saveUserDetails(data));
    } catch (error) {
      alert(strings('common.something_went_wrong'));
    }
  };

  function renderBackButton() {
    return <TouchableOpacity onPress={goBack}>Add back button icon here</TouchableOpacity>;
  }

  return (
    <SafeAreaView testID="Sigunup Component" style={style.screen}>
      {renderBackButton()}
      <KeyboardAwareScrollView
        contentContainerStyle={style.all}
        keyboardShouldPersistTaps={'handled'}>
        <CTextBox
          placeholder={strings('signUp.email')}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          testID="Email"
        />
        <CTextBox
          placeholder={strings('signUp.password')}
          value={password}
          onChangeText={setPassword}
          hidePassword={true}
          testID="Password"
        />
        <CTextBox
          placeholder={strings('signUp.confirmPassword')}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          hidePassword={true}
          returnKeyType={'done'}
          testID="ConfrimPassword"
        />
        <CButton testID="Signup Button" onPress={handleSignUp} text={strings('signUp.signUp')} />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

export default SignUp;
