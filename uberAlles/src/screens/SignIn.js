import React from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import UAbutton from '../componentes/UAbutton';
import {COLORS} from '../assets/colors';

const SignIn = props => {
  const recoverPassword = () => {
    alert('recuperar senha');
  };

  const login = () => {
    alert('Logar');
  };

  return (
    <View style={styles.container}>
      <View style={styles.signInSection}>
        <Image
          style={styles.image}
          source={require('../assets/images/logo.png')}
          accessibilityLabel="Imagem fake"
        />
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <Text
          style={styles.forgotPasswordText}
          // onPress={() => props.navigation.navigate('Home')}
          onPress={recoverPassword}>
          Esqueceu sua senha?
        </Text>
        <UAbutton text="Entrar" onClick={login} />
      </View>
      <View style={styles.signUpSection}>
        <View style={styles.hrContaner}>
          <View style={styles.hr} />
          <Text style={styles.hrText}>OU</Text>
          <View style={styles.hr} />
        </View>
        <View style={styles.subscribe}>
          <Text style={styles.subscribeText}>Não possui conta?</Text>
          <Text style={styles.subscribeLink}> Cadastre-se</Text>
        </View>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  signInSection: {
    flex: 4,
    alignItems: 'center',
  },
  signUpSection: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 150,
    height: 150,
    margin: 5,
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
  },
  forgotPasswordText: {
    fontSize: 12,
    color: COLORS.accentSecundary,
    alignSelf: 'flex-end',
  },
  hrContaner: {
    width: '100%',
    height: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hr: {
    width: '30%',
    height: 1,
    borderBottomColor: COLORS.grey,
    borderBottomWidth: 2,
  },
  hrText: {
    marginRight: 20,
    marginLeft: 20,
    fontSize: 14,
  },
  subscribe: {
    flexDirection: 'row',
    padding: 20,
  },
  subscribeText: {
    color: 'black',
  },
  subscribeLink: {
    color: COLORS.accentSecundary,
  },
});
