import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Navigator,
    View
} from 'react-native';


// import ProjectList from './project/ProjectList.js';
// import LoginComponent from './login/LoginComponent.js';
import HomeComponent from './login/HomeComponent';

export default class RoutersAndroid extends Component {

    render() {
        var defaultName = 'HomeComponent';
        var defaultComponent = HomeComponent;
        return (
            <Navigator
                initialRoute={{
                    name: defaultName,
                    component: defaultComponent
                }}
                configureScene={(route) => {
                    if (route.type == 'Bottom') {
                        return Navigator.SceneConfigs.FloatFromBottom; // 底部弹出
                    }
                    return Navigator.SceneConfigs.PushFromRight; // 右侧弹出
                }}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.params} navigator={navigator} />
                }} />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});