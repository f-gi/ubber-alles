// usar qnd se autentica no firebase, para coisas assincronas

import React from 'react';
import {ActivityIndicator} from 'react-native';
import {COLORS} from '../assets/colors';
import styled from 'styled-components';

export const LoadingArea = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`;

export default () => {
    return (
        <LoadingArea>
            <ActivityIndicator size="large" color={COLORS.primaryDark} />
        </LoadingArea>
    );
};
