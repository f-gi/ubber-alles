// tratar campos vazios
// tratar input quando login da errado
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  SafeAreaView,
  Alert,
} from 'react-native';
import UAbutton from '../componentes/UAbutton';
import {COLORS} from '../assets/colors';
import auth from '@react-native-firebase/auth';
import {CommonActions} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
import Loading from '../componentes/Loading';

const SignIn = props => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [loading, setLoading] = useState(false);

  const recoverPassword = () => {
    props.navigation.navigate('ForgotPass');
  };

  const storeUserCache = async value => {
    try {
      value.pass = pass; //guardando a senha
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('user', jsonValue);
      setLoading(false);
      props.navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Drivers'}],
        }),
      );
    } catch (e) {
      console.log('Sign: erro no storage: ', e);
    }
  };

  const getUser = () => {
    firestore()
      .collection('users')
      .doc(auth().currentUser.uid)
      .get()
      .then(doc => {
        if (doc.exists) {
          storeUserCache(doc.data());
        } else {
          console.log('No such document!');
        }
      })
      .catch(e => {
        console.log('Error getting document:', e);
      });
  };

  const login = () => {
    //tratar focus ao errar
    if (email !== '' && pass !== '') {
      setLoading(true);
      auth()
        .signInWithEmailAndPassword(email, pass)
        .then(() => {
          if (!auth().currentUser.emailVerified) {
            Alert.alert('Erro', 'E-mail da conta não confirmado!');
            setLoading(false);
            return;
          }
          getUser();
          setEmail('');
          setPass('');
        })
        .catch(e => {
          setLoading(false);
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
      Alert.alert('Erro', 'Informe um e-mail e senha');
    }
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
            // onEndEditing={() => this.passTextInput.focus()}
          />
          {/* adicionar botão de olho que mude o secureTextEntry para visualizar a senha */}
          <TextInput
            // ref={ref => {
            //   this.passTextInput = ref;
            // }}
            secureTextEntry={true}
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
      {loading && <Loading />}
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
