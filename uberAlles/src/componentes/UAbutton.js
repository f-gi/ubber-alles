import React from 'react';
import {Text, StyleSheet, TouchableHighlight} from 'react-native';
import {COLORS} from '../assets/colors';

const UAbutton = props => {
    // console.log(props);
    return (
        <TouchableHighlight style={styles.button} onPress={props.onClick}>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        color: 'white',
    },
    button: {
        width: '95%',
        alignItems: 'center',
        backgroundColor: COLORS.accent,
        padding: 10,
        margin: 10,
        borderRadius: 2,
    },
});

export default UAbutton;
