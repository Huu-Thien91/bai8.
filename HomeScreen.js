// HomeScreen.js
import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PhoneContext } from './PhoneContext';

const HomeScreen = () => {
  const { phoneNumber } = useContext(PhoneContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to HomeScreen!</Text>
      <Text style={styles.phoneText}>Số điện thoại đăng nhập: {phoneNumber}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  phoneText: {
    fontSize: 18,
    marginTop: 20,
  },
});

export default HomeScreen;
