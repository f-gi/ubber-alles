import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import UAbutton from '../componentes/UAbutton';

const Home = props => {
  console.log(props);
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log('montou o componente');
  }, []);

  useEffect(() => {
    console.log('fez update');
  });

  useEffect(() => {
    console.log('fez update no contador');
  }, [contador]);

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
