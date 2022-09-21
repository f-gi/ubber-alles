/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLORS} from '../assets/colors';
import LogoutButton from '../componentes/LogoutButton';

const Home = ({navigation}) => {
  // const [contador, setContador] = useState(0);

  // useEffect: tem a ver com o estado de vida do componente[DUVIDA, QUAL COMPONENTE?]

  // com o segundo argumento vazio responde apenas quando monta o componente
  // useEffect(() => {
  //   console.log('montou o componente');
  // }, []);

  // sem o segundo argumento responde quando o componente sofre update (quando mudar o state)
  // useEffect(() => {
  //   console.log('fez update');
  // });

  // com o segundo argumento responde quando satisfazer a condição
  // useEffect(() => {
  //   console.log('fez update no contador');
  // }, [contador]);

  // const cont = () => {
  //   setContador(contador + 1);
  // };

  // const reset = () => {
  //   setContador(0);
  // };

  useEffect(() => {
    navigation.setOptions({
      // headerLeft: false,
      title: 'Usuários',
      headerStyle: {backgroundColor: COLORS.primary},
      headerTitleStyle: {color: COLORS.white},
      headerRight: () => <LogoutButton />,
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  },
});
