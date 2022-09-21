import React, {useState} from 'react';
import {Body, TextInput} from './styles';
import UAbutton from '../../componentes/UAbutton';
import auth from '@react-native-firebase/auth';
import {Alert, Switch, Text, View} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [model, setModel] = useState('');
  const [board, setBoard] = useState('');
  const [color, setColor] = useState('');

  const register = () => {
    if (email !== '' && pass !== '' && name !== '') {
      if (pass === confirmPass) {
        if (pass.length > 5) {
          auth()
            .createUserWithEmailAndPassword(email, pass)
            .then(() => {
              let userf = auth().currentUser;
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
                      if (switchUser) {
                        if (model && board && color) {
                          // persistir no banco
                          Alert.alert(
                            'Motorista cadastrado! Carro: ' +
                              model +
                              ' placa: ' +
                              board +
                              ' cor: ' +
                              color,
                          );
                        } else {
                          Alert.alert(
                            'Por favor informe dados validos para o automovel',
                          );
                        }
                      }
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

  const [switchUser, setSwitchUser] = useState(false);

  const selectUser = value => {
    setSwitchUser(value);
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
      <Text>Você deseja criar conta como motorista?? </Text>
      <Text>{switchUser ? 'Sim' : 'Não'}</Text>
      <Switch onValueChange={selectUser} value={switchUser} />
      {switchUser && (
        <View>
          <Text>Oi motora </Text>
          <TextInput
            placeholder="Modelo do carro"
            keyboardType="default"
            returnKeyType="next"
            onChangeText={t => setModel(t)}
          />
          <TextInput
            placeholder="Placa"
            keyboardType="default"
            returnKeyType="next"
            onChangeText={t => setBoard(t)}
          />
          <TextInput
            placeholder="Cor"
            keyboardType="default"
            returnKeyType="next"
            onChangeText={t => setColor(t)}
          />
        </View>
      )}
      <UAbutton text="Criar conta" onClick={register} />
    </Body>
  );
};

export default SignUp;
