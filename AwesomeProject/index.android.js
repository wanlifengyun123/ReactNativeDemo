/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
} from 'react-native';

import TheMoviesComponent from './src/TheMoviesComponent.js';

export default class AwesomeProject extends Component {
  render() {
    var defaultName = 'TheMoviesComponent';
    var defaultComponent = TheMoviesComponent;
    return (
      <Navigator
        initialRoute={{ name: defaultName, component: defaultComponent }}
        configureScene={(route) => {
          return Navigator.SceneConfigs.HorizontalSwipeJump;
        }}
        renderScene={(route, navigator) => {
          let Component = route.component;
          return <Component {...route.params} navigator={navigator} />
        }} />
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
