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
  close: {
    position: 'absolute',
    top: 25,
    left: 16,
    zIndex: 1,
  },
  header: {
    marginTop: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: verticalScale(100),
    resizeMode: 'contain',
  },
  all: {
    marginTop: verticalScale(24),
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: verticalScale(12),
  },
  input: {
    borderWidth: 0.5,
    borderColor: Colors.grey3,
    borderRadius: 50,
    padding: 18,
    marginVertical: verticalScale(6),
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(28),
    paddingHorizontal: scale(8),
    marginBottom: verticalScale(16),
  },
  textRow: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomLabelStyle: {color: Colors.grey2, fontSize: 18},
  buttonContainer: {
    alignSelf: 'center',
  },
  signUpText: {color: Colors.blue1, marginLeft: 5},
});

export default styles;
