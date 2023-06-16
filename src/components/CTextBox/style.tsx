import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {COLOR} from '../../utilities/ColorsType';

const {darkGrey, grey, green, darkOrange, redColor} = COLOR.light;

const style = StyleSheet.create({
  input: {
    height: scale(45),
    paddingLeft: 10,
    paddingVertical: scale(4),
    fontSize: scale(15),
    backgroundColor: grey,
    borderRadius: scale(10),
  },
  warningStyle: {
    borderWidth: 2,
    borderColor: darkOrange,
  },
  errorStyle: {
    borderWidth: 2,
    borderColor: redColor,
  },
  focusedStyle: {
    borderWidth: 2,
    borderColor: green,
  },
  container: {
    marginTop: scale(12),
  },
  title: {
    fontSize: scale(13),
    color: darkGrey,
    marginBottom: scale(4),
  },
  bottomText: {
    color: darkGrey,
    marginTop: scale(4),
  },
});

export default style;
