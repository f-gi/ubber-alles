import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import {StatusBar} from 'react-native';
import {COLORS} from './src/assets/colors';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.primaryDark} />
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} options={SignInStyle} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const SignInStyle = {
  // headerLeft: false,
  title: 'Bem vindo',
  headerStyle: {
    backgroundColor: COLORS.primary,
  },
  headerTitleStyle: {
    color: 'white',
  },
};
