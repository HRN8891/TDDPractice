import React from 'react';
import {Text, TextProps, TextStyle} from 'react-native';
import {setTestIdentifier} from '../../utilities/misc';

interface ICLabel extends TextProps {
  style: TextStyle;
  testID?: string;
  onPress?: () => void;
}

function CLabel({children, style, testID, onPress}: ICLabel) {
  return (
    <Text {...setTestIdentifier(testID)} style={style} onPress={onPress}>
      {children}
    </Text>
  );
}

export default CLabel;
