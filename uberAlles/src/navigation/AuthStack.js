// import 'react-native-gesture-handler';
import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import ForgotPass from '../screens/ForgotPass';
// import {StatusBar} from 'react-native';
import {COLORS} from '../assets/colors';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    // <NavigationContainer independent={true}>
    // <StatusBar backgroundColor={COLORS.primaryDark} />
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen name="SignIn" component={SignIn} options={SignInStyle} />
      <Stack.Screen name="SignUp" component={SignUp} options={SignUpStyle} />
      <Stack.Screen
        name="ForgotPass"
        component={ForgotPass}
        options={ForgotPassStyle}
      />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default AuthStack;

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
