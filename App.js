// App.js
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from './HomeScreen';
import { PhoneProvider } from './PhoneContext';
import SignInScreen from './SignInScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <PhoneProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignIn">
          <Stack.Screen name="SignIn" component={SignInScreen} options={{ title: 'Đăng nhập' }} />
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PhoneProvider>
  );
};

export default App;
