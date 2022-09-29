import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import Preload from './src/screens/Preload';
import ForgotPass from './src/screens/ForgotPass';
import {StatusBar} from 'react-native';
import {COLORS} from './src/assets/colors';
import User from './src/screens/User';
import Users from './src/screens/Users';
import Drivers from './src/screens/Drivers';
import Driver from './src/screens/Driver';
import Trips from './src/screens/Trips';
import Trip from './src/screens/Trip';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.primaryDark} />
      {/* initialRouteName="Preload" */}
      <Stack.Navigator>
        <Stack.Screen
          name="Preload"
          component={Preload}
          options={PreloadStyle}
        />
        <Stack.Screen name="SignIn" component={SignIn} options={SignInStyle} />
        <Stack.Screen name="SignUp" component={SignUp} options={SignUpStyle} />
        <Stack.Screen
          name="ForgotPass"
          component={ForgotPass}
          options={ForgotPassStyle}
        />
        <Stack.Screen
          name="Drivers"
          component={Drivers}
          options={driversStyle}
        />
        <Stack.Screen name="Driver" component={Driver} options={driverStyle} />
        <Stack.Screen name="Tips" component={Trips} options={tripStyle} />
        <Stack.Screen name="Trip" component={Trip} options={tripsStyle} />
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="Users" component={Users} options={usersStyle} />
        <Stack.Screen name="User" component={User} options={userStyle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const PreloadStyle = {
  headerShown: false,
};

const SignInStyle = {
  // headerLeft: false,
  title: 'Bem vindo',
  headerStyle: {backgroundColor: COLORS.primary},
  headerTitleStyle: {color: 'white'},
};

const SignUpStyle = {
  title: 'Criar conta',
  headerStyle: {backgroundColor: COLORS.primary},
  headerTitleStyle: {color: 'white'},
  headerTintColor: 'white',
};

const ForgotPassStyle = {
  title: 'Recuperar senha',
  headerStyle: {backgroundColor: COLORS.primary},
  headerTitleStyle: {color: 'white'},
  headerTintColor: 'white',
};

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

// const GeneralBar = {
//   headerStyle: {
//     backgroundColor: COLORS.primary,
//   },
//   headerTitleStyle: {
//     color: 'white',
//   },
// };
