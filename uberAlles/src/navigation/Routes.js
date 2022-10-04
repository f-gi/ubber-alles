/* eslint-disable react-hooks/exhaustive-deps */
import {NavigationContainer} from '@react-navigation/native';
import React, {useContext, useEffect} from 'react';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import {AuthUserContext} from '../context/AuthUserProvider';
import auth from '@react-native-firebase/auth';
import {StatusBar} from 'react-native';
import {COLORS} from '../assets/colors';

export default function Routes() {
  // hook
  const {user, setUser} = useContext(AuthUserContext);
  useEffect(() => {
    const unsubscriber = auth().onAuthStateChanged(authUser => {
      // se está autenticado guarda na seção, se não fica null
      authUser ? setUser(authUser) : setUser(null);
    });

    return unsubscriber;
  }, []);

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.primaryDark} />
      {/* stacks de navegação pra qnd o user está logado na seção e para quando não está */}
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
