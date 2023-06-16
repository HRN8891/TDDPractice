import React, {useCallback, useEffect, useState} from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import CButton from '../../components/CButton';
import CLabel from '../../components/CLabel';
import CTextBox from '../../components/CTextBox';
import Style from './style';
import Wrapper from './Wrapper';

interface Focus {
  [name: string]: boolean;
}

const Login = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const [fieldsFocus, setFieldsFocus] = useState<Focus>({
    firstNameFocus: false,
    lastNameFocus: false,
    emailFocus: false,
    passwordFocus: false,
  });
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  const validateForm = useCallback(() => {
    const {email, password} = userData;
    let hasError = false;
    if (!email.trim()) {
      hasError = true;
      setEmailError(true);
    }
    if (!password.trim() || password.length < 8) {
      hasError = true;
      setPasswordError(true);
    }
    return hasError;
  }, [userData]);

  const onSigninClick = useCallback(async () => {}, [dispatch, userData, validateForm]);

  const onChangeText = (value: string, key: string) => {
    setUserData({...userData, [key]: value});
  };

  const clearErrorState = () => {
    setEmailError(false);
    setPasswordError(false);
  };
  const onInputFocus = (focusedKey: string) => {
    clearErrorState();
    setFieldsFocus({
      ...fieldsFocus,
      [focusedKey]: !fieldsFocus[focusedKey],
    });
  };
  const onSignupClick = () => {};

  const onForgotClick = () => {};
  return (
    <Wrapper subContainerStyle={Style.container}>
      <CLabel style={Style.title}>Login</CLabel>
      <CTextBox
        testID="Email"
        inputTitle="Email"
        containerStyle={Style.emailInput}
        value={userData.email}
        onChangeText={value => onChangeText(value, 'email')}
        keyboardType="email-address"
        isFocus={fieldsFocus.emailFocus}
        onFocus={() => onInputFocus('emailFocus')}
        onBlur={() => onInputFocus('emailFocus')}
        error={emailError}
        autoFocus={true}
      />
      <CTextBox
        testID="PasswordTextField"
        inputTitle="Password"
        value={userData.password}
        onChangeText={value => onChangeText(value, 'password')}
        hidePassword={true}
        isFocus={fieldsFocus.passwordFocus}
        onFocus={() => onInputFocus('passwordFocus')}
        onBlur={() => onInputFocus('passwordFocus')}
        error={passwordError}
      />

      {/* {(emailError || passwordError) && <WarningView message={emailError} error />} */}
      <CLabel testID="ForgotButton" onPress={onForgotClick} style={Style.forgot}>
        Forgot password
      </CLabel>
      <CButton testID="LoginButton" onPress={onSigninClick} text="Login" />
      <View style={Style.signupTextView}>
        <CLabel style={Style.signupText}> Not a Member yet? </CLabel>
        <CLabel testID="SignupButton" onPress={onSignupClick} style={Style.signup}>
          SignUp
        </CLabel>
      </View>
    </Wrapper>
  );
};

export default Login;
