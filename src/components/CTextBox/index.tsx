import React, {forwardRef} from 'react';
import {View, TextInput, TextInputProps, ViewStyle, TextStyle} from 'react-native';
import Style from './style';
import {Colors} from 'utilities/Colors';
import CLabel from '../CLabel';

const {green} = Colors;

export interface ICTextBox extends TextInputProps {
  hidePassword?: boolean;
  containerStyle?: ViewStyle;
  inputTitle?: string;
  isFocus?: boolean;
  error?: boolean;
  placeHolderText?: string;
  inputDescription?: string;
  warning?: string;
  testID: string;
}

const CTextBox = forwardRef(
  (
    {
      hidePassword,
      containerStyle,
      style,
      maxLength,
      keyboardType,
      onChangeText,
      value,
      editable,
      placeHolderText,
      inputTitle,
      returnKeyType,
      inputDescription,
      onFocus,
      onBlur,
      isFocus,
      autoFocus,
      warning,
      error,
      caretHidden = false,
      testID,
    }: ICTextBox,
    ref: React.Ref<TextInput>,
  ) => {
    return (
      <View style={[Style.container, containerStyle]}>
        {inputTitle && <CLabel style={Style.title}>{inputTitle}</CLabel>}
        <TextInput
          style={
            [
              Style.input,
              style,
              isFocus && Style.focusedStyle,
              warning && Style.warningStyle,
              error && Style.errorStyle,
            ] as TextStyle
          }
          testID={testID}
          secureTextEntry={hidePassword}
          placeholder={placeHolderText}
          value={value}
          onFocus={onFocus}
          onBlur={onBlur}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          maxLength={maxLength}
          editable={editable}
          selectionColor={green}
          returnKeyType={returnKeyType}
          autoFocus={autoFocus}
          caretHidden={caretHidden}
          ref={ref}
          autoCapitalize="none"
        />
        {inputDescription && <CLabel style={Style.bottomText}>{inputDescription}</CLabel>}
      </View>
    );
  },
);

export default CTextBox;
