import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {COLOR} from '../../utilities/ColorsType';

const {green, white} = COLOR.light;

const style = StyleSheet.create({
  buttonStyle: {
    borderRadius: scale(10),
    justifyContent: 'center',
    backgroundColor: green,
    paddingVertical: scale(13),
    width: '100%',
  },
  buttonTextStyle: {
    color: white,
    fontSize: scale(16),
    textAlign: 'center',
  },
  buttonContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  disabled: {
    opacity: 0.4,
  },
});
export default style;
