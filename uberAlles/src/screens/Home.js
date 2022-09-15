import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import UAbutton from '../componentes/UAbutton';

const Home = props => {
  const [contador, setContador] = useState(0);

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

  const cont = () => {
    setContador(contador + 1);
  };

  const reset = () => {
    setContador(0);
  };

  return (
    <View>
      <Text style={styles.text}>Contador = {contador}</Text>
      <UAbutton text="Contar" onClick={cont} />
      <UAbutton text="Reset" onClick={reset} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});
