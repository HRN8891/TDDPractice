import React, {useCallback} from 'react';
import {View, TouchableOpacity} from 'react-native';

import styles from './style';
import {storageKeys, removeSecureStorageItem} from '../../utilities/storageUtils';
// import {useAppSelector} from 'store';
import CLabel from 'components/CLabel';
import {DashboardScreenProps} from 'navigation/types';

function Dashboard({navigation}: DashboardScreenProps) {
  // const userData = useAppSelector(state => state.auth.userData);

  const onCrossPress = useCallback(() => {
    removeSecureStorageItem(storageKeys.userData)
      .then(() => {
        // remove user local data
      })
      .catch(() => {});
  }, []);

  return (
    <View style={styles.constainer}>
      <TouchableOpacity onPress={onCrossPress}>{/* Add cross button icon here */}</TouchableOpacity>
      <CLabel style={styles.textStyle}>Welcome To Dashboard!!!</CLabel>
      {/* <CLabel style={styles.textStyle}>Login as: {userData.email}</CLabel> */}
    </View>
  );
}

export default Dashboard;
