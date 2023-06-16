import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {COLOR} from '../../utilities/ColorsType';

const {green, white, black1} = COLOR.light;
const styles = StyleSheet.create({
  screen: {
    marginHorizontal: scale(20),
    flex: 1,
    backgroundColor: white,
  },
  loginTextView: {
    flexDirection: 'row',
    marginTop: scale(20),
  },
  title: {
    fontSize: scale(26),
    color: black1,
  },
  nameView: {
    flexDirection: 'row',
    marginTop: scale(15),
  },
  firstNameInput: {
    flex: 0.5,
  },
  lastNameInput: {
    flex: 0.5,
    marginLeft: scale(20),
  },
  signupButton: {
    marginTop: scale(17),
  },
  alreadyAccount: {
    fontSize: scale(13),
  },
  marginTop10: {
    marginTop: scale(10),
  },
  login: {
    color: green,
  },
  underlineText: {
    textDecorationLine: 'underline',
  },
});

export default styles;
