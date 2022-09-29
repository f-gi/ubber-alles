import React from 'react';
import styled from 'styled-components';
import {COLORS} from '../../assets/colors';

const Button = styled.TouchableHighlight`
  background-color: ${COLORS.primaryLight};
  padding: 20px;
  margin-top: 10px;
  border-radius: 10px;
`;

const Text = styled.Text`
  font-size: 20px;
  color: ${COLORS.white};
`;

const Item = ({item, onPress}) => {
  return (
    <Button onPress={onPress} underlayColor="transparent">
      <>
        <Text>{item.nome}</Text>
        <Text>{item.email}</Text>
      </>
    </Button>
  );
};

export default Item;
