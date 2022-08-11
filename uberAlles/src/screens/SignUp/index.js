import React, {useState} from 'react';
import {Body, TextInput} from './styles';
import UAbutton from '../../componentes/UAbutton';
import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
// import {CommonActions} from '@react-navigation/native';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const register = ({navigation}) => {
    if (email !== '' && pass !== '' && name !== '') {
      if (pass === confirmPass) {
        if (pass.length > 5) {
          auth()
            .createUserWithEmailAndPassword(email, pass)
            .then(() => {
              Alert.alert(
                'Sucesso!',
                'Usuário criado com sucesso, por favor realize o login para continuar',
                [
                  {
                    text: 'OK',
                    onPress: () => navigation.navigate('SignIn'),
                  },
                ],
              );
            })
            .catch(e => {
              console.log(e);
              switch (e.code) {
                case 'auth/email-already-in-use':
                  Alert.alert('Erro', 'Este e-mail já está sendo utilizado');
                  break;
                case 'auth/invalid-email':
                  Alert.alert('Erro', 'E-mail inválido');
                  break;
              }
            });
        } else {
          Alert.alert('Erro', 'Senha precisa ter mais que 6 digitos');
        }
      } else {
        Alert.alert('Erro', 'Senha e confirmação de senha não coincidem');
      }
    } else {
      Alert.alert('Erro', 'Por favor, digite Nome, E-mail e senha válidos');
    }
  };
  return (
    <Body>
      <TextInput
        placeholder="Nome completo"
        keyboardType="default"
        returnKeyType="next"
        onChangeText={t => setName(t)}
      />
      <TextInput
        placeholder="E-mail"
        keyboardType="email-address"
        returnKeyType="next"
        onChangeText={t => setEmail(t)}
      />
      <TextInput
        secureTextEntry={true}
        placeholder="Senha"
        keyboardType="default"
        returnKeyType="next"
        onChangeText={t => setPass(t)}
      />
      <TextInput
        secureTextEntry={true}
        placeholder="Confirmar senha"
        keyboardType="default"
        returnKeyType="go"
        onChangeText={t => setConfirmPass(t)}
      />
      <UAbutton text="Criar conta" onClick={register} />
    </Body>
  );
};

export default SignUp;
