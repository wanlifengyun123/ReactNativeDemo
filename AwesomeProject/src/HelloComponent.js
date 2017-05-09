/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

/**
 * 方式一 ：ES6
 * @type {Object}
 */
export default class HelloComponent extends Component {
  render(){
    return <Text style ={{fontSize:20,backgroundColor:'red'}}>Hello.{this.props.name}</Text>
  }
}

/**
 * 方式二 ：ES5
 * @type {Object}
 */
// var HelloComponent = React.createClass({
//    render(){
//      return <Text style ={{fontSize:20,backgroundColor:'red'}}>Hello</Text>
//    }
// })
// module.export = HelloComponent;


/**
 * 方式三 ：函数式
 *  无状态的，不能使用this
 */
// function HelloComponent(props){
//   return <Text style ={{fontSize:20,backgroundColor:'red'}}>Hello.{props.name}</Text>
// }
// module.export = HelloComponent;
