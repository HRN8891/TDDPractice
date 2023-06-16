import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {COLOR} from '../../utilities/ColorsType';

const {black1, green, lightGreen2} = COLOR.light;
const styles = StyleSheet.create({
  title: {
    fontSize: scale(20),
    color: black1,
  },
  loginButton: {
    marginTop: scale(25),
  },
  requestCodeHeader: {
    backgroundColor: lightGreen2,
  },
  container: {
    flex: 1,
    marginHorizontal: scale(20),
  },
  emailInput: {
    marginTop: scale(30),
  },
  signupTextView: {
    marginTop: scale(20),
    flexDirection: 'row',
  },
  forgot: {
    color: green,
    fontSize: scale(12),
    marginVertical: scale(25),
  },
  signupText: {
    color: black1,
  },
  signup: {
    color: green,
  },
});
export default styles;
