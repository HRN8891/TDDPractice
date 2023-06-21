import React from 'react';
import {View, Text, TouchableOpacity, TextStyle, ViewStyle} from 'react-native';
import style from './style';
import {setTestIdentifier} from 'utilities/misc';

interface ICButton {
  textStyle?: TextStyle;
  buttonContainerStyle?: ViewStyle;
  onPress: () => any;
  text: string;
  disabled?: boolean;
  testIDPrefix: string;
}

function CButton({
  textStyle,
  buttonContainerStyle,
  onPress,
  text,
  disabled,
  testIDPrefix = '',
}: ICButton) {
  return (
    <View style={[style.buttonContainerStyle, buttonContainerStyle]}>
      <TouchableOpacity
        {...setTestIdentifier(`${testIDPrefix}`)}
        style={style.buttonStyle}
        accessibilityRole="button"
        onPress={onPress}
        disabled={disabled}>
        <Text style={[style.buttonTextStyle, textStyle]}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CButton;
