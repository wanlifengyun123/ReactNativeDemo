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

import RoutersAndroid from './src/RoutersAndroid.js';

AppRegistry.registerComponent('FirstProject', () => RoutersAndroid);
