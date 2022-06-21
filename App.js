import React, {useEffect, useState, LogBox} from 'react';
import {
  PermissionsAndroid,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BluetoothSerial from 'react-native-bluetooth-serial-next';

const App = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function init() {
      const enable = await BluetoothSerial.requestEnable();
      const listBluetooth = await BluetoothSerial.list();
      if (listBluetooth.length > 0) {
        setList(listBluetooth);
      }
    }

    init();
  });

  return (
    <View style={styles.mainContainer}>
      {list.map(item => (
        <Text>{item.name}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  circleView: {
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 250,
    borderRadius: 150,
    borderWidth: 1,
  },
  boldTextStyle: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
