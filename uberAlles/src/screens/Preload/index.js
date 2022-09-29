import React, {useEffect} from 'react';
import {Container, Image} from './styles';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import {CommonActions} from '@react-navigation/native';

const Preload = ({navigation}) => {
  const getUserCache = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
      //   return null;
    } catch (e) {
      console.log('Home: erro na busca de dados do storage: ', e);
    }
  };

  const loginUser = async () => {
    const user = await getUserCache();
    if (user) {
      auth()
        .signInWithEmailAndPassword(user.email, user.pass)
        .then(() => {
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: 'Trip'}],
            }),
          );
        })
        .catch(e => {
          console.log('erro ao logar: ' + e);
          switch (e.code) {
            case 'auth/user-not-found':
              Alert.alert('Erro', 'Usuário não cadastrado');
              break;
            case 'auth/invalid-email':
              Alert.alert('Erro', 'E-mail inválido');
              break;
            case 'auth/wrong-password':
              Alert.alert('Erro', 'Senha incorreta');
              break;
            case 'auth/user-disabled':
              Alert.alert('Erro', 'Usuário desabilitado');
              break;
            case 'auth/too-many-requests':
              Alert.alert(
                'Bloqueamos todas as solicitações deste dispositivo devido a atividades incomuns. Tente mais tarde. [ O acesso a esta conta foi temporariamente desativado devido a muitas tentativas de login com falha. Você pode restaurá-lo imediatamente redefinindo sua senha ou pode tentar novamente mais tarde. ]',
              );
              break;
          }
        });
    } else {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'SignIn'}],
        }),
      );
    }
  };

  // executa só na montagem
  useEffect(() => {
    loginUser();
  }, []);

  return (
    <Container>
      <Image
        source={require('../../assets/images/logo.png')}
        accessibilityLabel="Imagem fake"
      />
    </Container>
  );
};

export default Preload;
