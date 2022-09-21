import styled from 'styled-components/native';
import {COLORS} from '../../assets/colors';

export const Body = styled.View`
  flex: 1;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  width: 95%;
  height: 50px;
  border-bottom-color: ${COLORS.grey};
  border-bottom-width: 1px;
  font-size: 16px;
  padding-left: 2px;
  padding-bottom: 1px;
`;

export const Div = styled.View`
  flex: 1;
  align-items: center;
`;
