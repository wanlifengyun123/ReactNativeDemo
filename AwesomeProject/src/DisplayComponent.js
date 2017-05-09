
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class DisplayComponent extends Component {

    render() {
        return <View style={styles.container}>
            <Text style={styles.containerText}>Hello01</Text>
            <Text style={styles.containerText}>Hello02</Text>
            <Text style={styles.containerText}>Hello03</Text>
            <Text style={styles.containerText}>Hello04</Text>
            <Text style={styles.containerText}>Hello05</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        // flexWrap: 'wrap',

    },
    containerText: {
        width: 100,
        height: 50,
        fontSize: 20,
        marginLeft: 3,
        backgroundColor: 'red',
        textAlign: 'center',
        alignSelf:'auto',
    },
});
