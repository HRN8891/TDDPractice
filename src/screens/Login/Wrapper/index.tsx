import React from 'react';
import {
  Keyboard,
  SafeAreaView,
  StatusBar,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
import Style from './style';

interface WrapperProps {
  wrapperStyle?: ViewStyle;
  subContainerStyle?: ViewStyle;
  children: React.ReactNode;
  testId: string;
}

const Wrapper = ({children, wrapperStyle, subContainerStyle, testId}: WrapperProps) => {
  const onContainerClick = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback
      testID={testId}
      style={[Style.container, wrapperStyle]}
      onPress={onContainerClick}>
      <View style={Style.innerView}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={[Style.container, subContainerStyle]}>{children}</SafeAreaView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Wrapper;
