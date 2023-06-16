import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {COLOR} from '../../utilities/ColorsType';

const {lightGreen, green} = COLOR.light;

const styles = StyleSheet.create({
  container: {
    backgroundColor: lightGreen,
    flex: 1,
  },
  upperView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginHorizontal: scale(30),
  },
  title: {
    color: green,
    fontSize: scale(28),
    letterSpacing: 1,
  },
  subTitle: {
    fontSize: scale(17),
    marginTop: scale(14),
  },
  description: {
    textAlign: 'center',
    fontSize: scale(14),
    marginTop: scale(14),
  },
  button: {
    width: '68%',
    marginTop: scale(40),
  },
  alreadyAccount: {
    fontSize: scale(13),
  },
  loginTextView: {
    flexDirection: 'row',
    marginTop: scale(20),
  },
  login: {
    color: green,
  },
  imageStyle: {
    width: '100%',
  },
});

export default styles;
