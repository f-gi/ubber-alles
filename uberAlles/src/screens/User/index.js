/* eslint-disable react-hooks/exhaustive-deps */
import firestore from '@react-native-firebase/firestore';
import React, {useEffect, useState} from 'react';
import {ToastAndroid} from 'react-native';
import UAbutton from '../../componentes/UAbutton';
import {Container, TextInput} from './styles';

const User = ({route, navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [uid, setUid] = useState('');

  //   console.log(props.route.params.user);

  useEffect(() => {
    setName(route.params.user.nome);
    setEmail(route.params.user.email);
    setUid(route.params.user.id);
  }, []);

  const showToast = message => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  const save = () => {
    firestore()
      .collection('users')
      .doc(uid)
      .set(
        {
          nome: name,
        },
        {merge: true},
      )
      .then(() => {
        setName('');
        setEmail('');
        setUid('');
        showToast('Dados salvos'); //mensagem que some
        navigation.goBack();
      })
      .catch(e => {
        console.log('User, save: ' + e);
      });
  };

  return (
    <Container>
      <TextInput
        placeholder="Nome completo"
        keyboardType="default"
        returnKeyType="go"
        onChangeText={t => setName(t)}
        value={name}
      />
      <TextInput
        placeholder="E-mail"
        keyboardType="email-address"
        editable={false}
        value={email}
      />
      <UAbutton text="Salvar" onClick={save} />
    </Container>
  );
};

export default User;
