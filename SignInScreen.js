// SignInScreen.js
import React, { useContext, useState } from 'react';
import { Alert, Button, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import { PhoneContext } from './PhoneContext';

const SignInScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid, setIsValid] = useState(true);
  const { setPhoneNumber: setContextPhoneNumber } = useContext(PhoneContext);

  const formatPhoneNumber = (input) => {
    let cleaned = ('' + input).replace(/\D/g, '');
    let match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    if (match) {
      let formattedNumber = `${match[1]}${match[2] ? '-' + match[2] : ''}${match[3] ? '-' + match[3] : ''}`;
      return formattedNumber;
    }
    return input;
  };

  const handlePhoneChange = (input) => {
    const formattedNumber = formatPhoneNumber(input);
    setPhoneNumber(formattedNumber);
    validatePhoneNumber(formattedNumber);
  };

  const validatePhoneNumber = (number) => {
    const cleaned = number.replace(/\D/g, '');
    setIsValid(cleaned.length === 10);
  };

  const handleSubmit = () => {
    const cleaned = phoneNumber.replace(/\D/g, '');
    if (cleaned.length !== 10) {
      Alert.alert('Lỗi', 'Số điện thoại không hợp lệ. Vui lòng nhập lại số điện thoại hợp lệ.');
    } else {
      setContextPhoneNumber(phoneNumber); // Lưu số điện thoại vào context
      navigation.navigate('Home'); // Điều hướng tới HomeScreen
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View>
        <Text style={styles.title}>Đăng nhập</Text>
        <Text style={styles.subtitle}>Nhập số điện thoại</Text>
        <Text style={styles.description}>
          Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
        </Text>

        <TextInput
          style={[styles.input, !isValid && styles.inputError]}
          value={phoneNumber}
          onChangeText={handlePhoneChange}
          keyboardType="numeric"
          placeholder="Nhập số điện thoại của bạn"
          maxLength={12}
        />
        {!isValid && <Text style={styles.errorText}>Số điện thoại không hợp lệ</Text>}

        <View style={styles.buttonContainer}>
          <Button title="Tiếp tục" onPress={handleSubmit} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#777',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
    marginBottom: 10,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 20,
    borderRadius: 5,
    overflow: 'hidden',
  },
});

export default SignInScreen;
