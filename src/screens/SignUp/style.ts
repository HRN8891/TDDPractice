import {StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import {Colors} from '../../utilities/Colors';

const styles = StyleSheet.create({
  screen: {
    paddingTop: 25,
    paddingBottom: verticalScale(24),
    paddingHorizontal: scale(16),
    flex: 1,
    backgroundColor: Colors.grey4,
  },
  all: {
    marginTop: verticalScale(24),
    flex: 1,
    justifyContent: 'center',
  },
  crossButton: {color: Colors.grey1, margin: 16},
});

export default styles;
