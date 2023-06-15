import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {Colors} from '../../utilities/Colors';

const style = StyleSheet.create({
  buttonStyle: {
    backgroundColor: Colors.black1,
    borderRadius: scale(100),
    justifyContent: 'center',
    paddingTop: scale(20),
    paddingBottom: scale(20),
    width: scale(200),
  },
  buttonTextStyle: {
    color: Colors.white,
    fontSize: scale(16),
    alignSelf: 'center',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scale(20),
  },
  disabled: {
    opacity: 0.4,
  },
});
export default style;
