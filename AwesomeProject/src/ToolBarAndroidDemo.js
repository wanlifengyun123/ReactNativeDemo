

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
} from 'react-native';

var ToolbarAndroid = require('ToolbarAndroid');

class ToolBarAndroidDemo extends Component {
    render() {
        return (
            <ToolbarAndroid
                actions={[{title: 'Settings', icon:require('./ic_back.png'), show:'always'}]}
                style={styles.toolbar}
                title="标题">
            </ToolbarAndroid>
        );
    }
}

// var toolbarActions = [
 
//     { title: 'Filter' },

// ];

    // { title: 'Settings', icon: require('./ic_settings_black_48dp.png'), show: 'always' },
    //    { title: 'Create', icon: require('./ic_create_black_48dp.png'), show: 'always' },

const styles = StyleSheet.create({
    toolbar: {
        backgroundColor: '#e9eaed',
        height: 56,
    },
});