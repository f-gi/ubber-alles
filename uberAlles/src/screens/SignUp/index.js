import React, {useState} from 'react';
import {Body, TextInput} from './styles';
import UAbutton from '../../componentes/UAbutton';
import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const register = () => {
    if (email !== '' && pass !== '' && name !== '') {
      if (pass === confirmPass) {
        if (pass.length > 5) {
          auth()
            .createUserWithEmailAndPassword(email, pass)
            .then(() => {
              let userf = auth().currentUser;
              console.log(
                'currentUser userf (entrou no then do create user with email and pass): ',
                userf,
              );
              console.log('userf.uid: ', userf.uid);
              let user = {};
              user.nome = name;
              user.email = email;
              firestore()
                .collection('users') //referencia da coleção
                .doc(userf.uid) //chave, id do usuario vai ser a mesma da authentification
                .set(user) //valor do documento
                .then(() => {
                  console.log('Entrou no then do firestore');
                  // depois do usuário adicionado no banco manda verificação de e-mail
                  userf
                    .sendEmailVerification()
                    .then(() => {
                      Alert.alert(
                        'Aviso!',
                        'Foi enviado um e-mail de verificação para: ' + email,
                        [
                          {
                            text: 'OK',
                            onPress: () =>
                              navigation.dispatch(
                                CommonActions.reset({
                                  index: 0,
                                  routes: [{name: 'SignIn'}],
                                }),
                              ),
                          },
                        ],
                      );
                    })
                    .catch(e => {
                      Alert.alert(
                        'Aviso! Erro ao enviar email de verificação: ',
                        e,
                      );
                    });
                })
                .catch(e => {
                  console.log('entrou no catch do firestore!: ', e);
                });
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
    // Alert.alert(
    //   'Sucesso!',
    //   'Usuário criado com sucesso, por favor realize o login para continuar',
    //   [
    //     {
    //       text: 'OK',
    //       onPress: () =>
    //         navigation.dispatch(
    //           CommonActions.reset({
    //             index: 0,
    //             routes: [{name: 'SignIn'}],
    //           }),
    //         ),
    //     },
    //   ],
    // );
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
