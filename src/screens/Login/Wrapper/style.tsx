import {StyleSheet} from 'react-native';
import {COLOR} from '../../../utilities/ColorsType';

const {white} = COLOR.light;
const styles = StyleSheet.create({
  container: {flex: 1},
  subContainer: {
    flex: 1,
  },
  innerView: {
    flex: 1,
    backgroundColor: white,
  },
});

export default styles;
