import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import UAbutton from '../componentes/UAbutton';
import {COLORS} from '../assets/colors';
import app from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

const SignIn = props => {
  console.log(app);
  console.log(auth);

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const recoverPassword = () => {
    alert('recuperar senha');
  };

  const login = () => {
    console.log(`E-mail = ${email} Senha = ${pass}`);
    alert('Logar');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.signInSection}>
          <Image
            style={styles.image}
            source={require('../assets/images/logo.png')}
            accessibilityLabel="Imagem fake"
          />
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            keyboardType="email-address"
            returnKeyType="next"
            onChangeText={t => setEmail(t)}
            onEndEditing={() => this.passTextInput.focus()}
          />
          <TextInput
            ref={ref => {
              this.passTextInput = ref;
            }}
            style={styles.input}
            placeholder="Senha"
            keyboardType="default"
            returnKeyType="go"
            onChangeText={t => setPass(t)}
          />
          <Text style={styles.forgotPasswordText} onPress={recoverPassword}>
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
            <Text style={styles.subscribeText}>Não possui conta? </Text>
            <Text
              onPress={() => props.navigation.navigate('SignUp')}
              style={styles.subscribeLink}>
              Cadastre-se
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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
