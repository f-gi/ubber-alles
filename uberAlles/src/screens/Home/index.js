/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {COLORS} from '../../assets/colors';
import LogoutButton from '../../componentes/LogoutButton';
import {Container, FlatList} from './styles';
import Item from './Item';
import firestore from '@react-native-firebase/firestore';

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

  const [data, setData] = useState([]);

  const getUsers = () => {
    // tratar pra pegar só dos que tem email confirmado
    firestore()
      .collection('users')
      .get()
      .then(querySnapshot => {
        let d = [];
        querySnapshot.forEach(doc => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, ' => ', doc.data());
          const user = {
            id: doc.id,
            nome: doc.data().nome,
            email: doc.data().email,
          };
          d.push(user);
        });
        console.log('d: ', d);
        setData(d);
      })
      .catch(e => {
        console.log('Home, getUsers: ' + e);
      });
  };

  useEffect(() => {
    navigation.setOptions({
      // headerLeft: false,
      title: 'Usuários',
      headerStyle: {backgroundColor: COLORS.primary},
      headerTitleStyle: {color: COLORS.white},
      headerRight: () => <LogoutButton />,
    });
    getUsers();
  }, []);

  const routeUser = item => {
    console.log(item);
  };

  const renderItem = ({item}) => (
    <Item item={item} onPress={() => routeUser(item)} />
  );

  return (
    <Container>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </Container>
  );
};

export default Home;
