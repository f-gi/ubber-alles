import React from 'react';
import {Text, StyleSheet, TouchableHighlight} from 'react-native';

const UAbutton = props => {
    // console.log(props);
    return (
        <TouchableHighlight style={styles.button} onPress={props.onClick}>
            <Text>{props.text}</Text>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 50,
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'pink',
        padding: 10,
        margin: 10,
    },
});

export default UAbutton;
