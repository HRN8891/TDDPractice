import React, {useCallback, useState} from 'react';
import {View, Text} from 'react-native';
import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';
import {strings} from 'locales/i18n';
import CTextBox from 'components/CTextBox';
import CButton from 'components/CButton';
import Wrapper from '../Login/Wrapper';
import CLabel from 'components/CLabel';
// import {WarningView} from 'components';
import style from './style';

interface Focus {
  [name: string]: boolean;
}

function Register() {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [fieldsFocus, setFieldsFocus] = useState<Focus>({
    firstNameFocus: false,
    lastNameFocus: false,
    emailFocus: false,
    passwordFocus: false,
  });

  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const onSignupInPress = useCallback(async () => {}, []);

  const clearErrorState = () => {
    setFirstNameError(false);
    setLastNameError(false);
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

  const onChangeText = (value: string, key: string) => {
    setUserData({...userData, [key]: value});
  };
  const onLoginClick = () => {};
  return (
    <Wrapper subContainerStyle={style.screen}>
      <CLabel style={style.title}>{strings('signUp.signup')}</CLabel>
      <KeyboardAwareScrollView
        enableAutomaticScroll={true}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'handled'}>
        <View style={style.nameView}>
          <CTextBox
            testID="SignupFirstName"
            containerStyle={style.firstNameInput}
            inputTitle={strings('signUp.firstName')}
            value={userData.firstName}
            onChangeText={value => onChangeText(value, 'firstName')}
            isFocus={fieldsFocus.firstNameFocus}
            onFocus={() => onInputFocus('firstNameFocus')}
            onBlur={() => onInputFocus('firstNameFocus')}
            autoFocus={true}
            // warning={firstNameError}
          />
          <CTextBox
            testID="SignupLastame"
            inputTitle={strings('signUp.lastName')}
            containerStyle={style.lastNameInput}
            value={userData.lastName}
            onChangeText={value => onChangeText(value, 'lastName')}
            isFocus={fieldsFocus.lastNameFocus}
            onFocus={() => onInputFocus('lastNameFocus')}
            onBlur={() => onInputFocus('lastNameFocus')}
            // warning={lastNameError}
          />
        </View>
        <CTextBox
          testID="SignupEmail"
          inputTitle={strings('signUp.email')}
          value={userData.email}
          onChangeText={value => onChangeText(value, 'email')}
          keyboardType="email-address"
          isFocus={fieldsFocus.emailFocus}
          onFocus={() => onInputFocus('emailFocus')}
          onBlur={() => onInputFocus('emailFocus')}
          //   warning={emailError}
        />
        <CTextBox
          testID="SignupPassword"
          inputTitle={strings('signUp.password')}
          value={userData.password}
          onChangeText={value => onChangeText(value, 'password')}
          hidePassword={true}
          inputDescription={strings('signUp.passwordInstruction')}
          isFocus={fieldsFocus.passwordFocus}
          onFocus={() => onInputFocus('passwordFocus')}
          onBlur={() => onInputFocus('passwordFocus')}
          //   warning={passwordError}
        />
        {/* {(firstNameError || lastNameError || emailError || passwordError) && (
          <WarningView message={strings('signUp.errorMesssage')} />
        )} */}

        <Text style={[style.alreadyAccount, style.marginTop10]}>
          {strings('signUp.agreement')}
          <Text onPress={() => {}} style={style.underlineText}>
            {strings('signUp.terms')}
          </Text>
          <Text>{strings('signUp.and')}</Text>
          <Text onPress={() => {}} style={style.underlineText}>
            {strings('signUp.privacyPolicy')}
          </Text>
        </Text>
        <CButton
          testID="SignupGetStarted"
          onPress={onSignupInPress}
          buttonContainerStyle={style.signupButton}
          text={strings('signUp.getStarted')}
        />

        <View style={style.loginTextView}>
          <CLabel style={style.alreadyAccount}>{strings('welcomeScreen.alreadyAccount')}</CLabel>
          <CLabel testID="SignupLoginButton" onPress={onLoginClick} style={style.login}>
            {`${strings('welcomeScreen.login')}`}
          </CLabel>
        </View>
      </KeyboardAwareScrollView>
    </Wrapper>
  );
}
export default Register;
