import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import SignIn from './src/screens/SignIn';
// import SignUp from './src/screens/SignUp';
import Preload from '../screens/Preload';
// import ForgotPass from './src/screens/ForgotPass';
// import {StatusBar} from 'react-native';
import {COLORS} from '../assets/colors';
import User from '../screens/User';
import Users from '../screens/Users';
import Drivers from '../screens/Drivers';
import Driver from '../screens/Driver';
import Trips from '../screens/Trips';
import Trip from '../screens/Trip';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    // <NavigationContainer independent={true}>
    // <StatusBar backgroundColor={COLORS.primaryDark} />
    <Stack.Navigator initialRoutName="Preload">
      <Stack.Screen name="Preload" component={Preload} options={PreloadStyle} />
      <Stack.Screen name="Drivers" component={Drivers} options={driversStyle} />
      <Stack.Screen name="Driver" component={Driver} options={driverStyle} />
      <Stack.Screen name="Tips" component={Trips} options={tripStyle} />
      <Stack.Screen name="Trip" component={Trip} options={tripsStyle} />
      {/* <Stack.Screen name="Home" component={Home} /> */}
      <Stack.Screen name="Users" component={Users} options={usersStyle} />
      <Stack.Screen name="User" component={User} options={userStyle} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default AppStack;

const PreloadStyle = {
  headerShown: false,
};

// const SignInStyle = {
//   // headerLeft: false,
//   title: 'Bem vindo',
//   headerStyle: {backgroundColor: COLORS.primary},
//   headerTitleStyle: {color: 'white'},
// };

// const SignUpStyle = {
//   title: 'Criar conta',
//   headerStyle: {backgroundColor: COLORS.primary},
//   headerTitleStyle: {color: 'white'},
//   headerTintColor: 'white',
// };

// const ForgotPassStyle = {
//   title: 'Recuperar senha',
//   headerStyle: {backgroundColor: COLORS.primary},
//   headerTitleStyle: {color: 'white'},
//   headerTintColor: 'white',
// };

const userStyle = {
  title: 'Usuário',
  headerStyle: {backgroundColor: COLORS.primary},
  headerTitleStyle: {color: 'white'},
  headerTintColor: 'white',
};

const usersStyle = {
  // title: 'Usuário',
  // headerStyle: {backgroundColor: COLORS.primary},
  // headerTitleStyle: {color: 'white'},
  // headerTintColor: 'white',
};

const driversStyle = {
  // title: 'Usuário',
  // headerStyle: {backgroundColor: COLORS.primary},
  // headerTitleStyle: {color: 'white'},
  // headerTintColor: 'white',
};

const driverStyle = {
  // title: 'Usuário',
  // headerStyle: {backgroundColor: COLORS.primary},
  // headerTitleStyle: {color: 'white'},
  // headerTintColor: 'white',
};

const tripsStyle = {
  // title: 'Usuário',
  // headerStyle: {backgroundColor: COLORS.primary},
  // headerTitleStyle: {color: 'white'},
  // headerTintColor: 'white',
};

const tripStyle = {
  // title: 'Usuário',
  // headerStyle: {backgroundColor: COLORS.primary},
  // headerTitleStyle: {color: 'white'},
  // headerTintColor: 'white',
};
