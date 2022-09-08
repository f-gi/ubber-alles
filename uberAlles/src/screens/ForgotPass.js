import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Alert} from 'react-native';
import {COLORS} from '../assets/colors';
import UAbutton from '../componentes/UAbutton';
import auth from '@react-native-firebase/auth';

const ForgotPass = ({navigation}) => {
  const [email, setEmail] = useState('');

  const recover = () => {
    if (email !== '') {
      console.log(email);
      auth()
        .sendPasswordResetEmail(email)
        .then(() => {
          Alert.alert(
            'Atenção:',
            'Enviamos um email de recuperação de senha para o seguinte endereço ' +
              email,
            [{text: 'OK', onPress: () => navigation.navigate('SignIn')}],
            // onPress: () => navigation.navigate('SignIn'),
          );
        })
        .catch(e => {
          switch (e.code) {
            case 'auth/user-not-found':
              Alert.alert('Erro', 'Email não cadastrado');
              break;
            case 'auth/invalid-email':
              Alert.alert('Erro', 'E-mail inválido');
              break;
            case 'auth/user-disabled':
              Alert.alert('Erro', 'Usuário desabilitado');
              break;
          }
        });
    } else {
      Alert.alert('Atenção', 'Por favor, digite um e-mail válido');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
        returnKeyType="next"
        autoFocus={true}
        // seria o mesmo que this.email = t
        onChangeText={t => setEmail(t)}
      />
      <UAbutton text="Recuperar senha" onClick={recover} />
    </View>
  );
};

export default ForgotPass;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    width: '95%',
    height: 50,
    borderColor: 'black',
    borderBottomColor: COLORS.grey,
    borderBottomWidth: 1,
    fontSize: 16,
    paddingLeft: 2,
    paddingBottom: 1,
    marginTop: 40,
  },
});
