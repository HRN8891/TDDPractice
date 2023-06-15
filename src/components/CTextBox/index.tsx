import React from 'react';
import {View, TextInput, TextInputProps, ViewStyle, Platform} from 'react-native';
import styles from './style';
import {Colors} from '../../utilities/Colors';

function setTestIdentifier(id: string) {
  if (!id) {
    return {};
  }
  return {testID: id, accessibilityLabel: id};
}

export const IS_IOS = Platform.OS === 'ios';

export interface ICTextBox extends TextInputProps {
  hidePassword?: boolean;
  containerStyle?: ViewStyle;
  testIDPrefix?: string;
}

function CTextBox({
  hidePassword,
  containerStyle,
  style,
  testIDPrefix = '',
  ...inputProps
}: ICTextBox) {
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        testID={testIDPrefix}
        accessibilityLabel={testIDPrefix}
        style={[styles.input, style]}
        underlineColorAndroid="transparent"
        secureTextEntry={hidePassword}
        placeholderTextColor={Colors.black1}
        selectionColor={Colors.black1}
        {...inputProps}
      />
    </View>
  );
}

export default CTextBox;
