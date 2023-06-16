import {ImageSourcePropType} from 'react-native';

import BackIcon from '../assets/icons/BackIcon.svg';

export const LOCAL_IMAGES_PATH = {
  welcomeImage: require('../assets/images/Welcome.png') as ImageSourcePropType,
  DummyProfile: require('../assets/images/DummyProfile.png') as ImageSourcePropType,
  DummyPost: require('../assets/images/DummyPost.png') as ImageSourcePropType,
};

const welcomeImage = require('../assets/images/Welcome.png') as ImageSourcePropType;

export const WELCOME = welcomeImage;

export {BackIcon};
