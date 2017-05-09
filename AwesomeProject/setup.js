/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  ListView,
  View,
} from 'react-native';


import HelloComponent, { } from './src/HelloComponent.js';
import DisplayComponent, { } from './src/DisplayComponent.js';

var MOCKED_MOVIES_DATA = [
  { title: '标题', year: '2015', posters: { thumbnail: 'http://i.imgur.com/UePbdph.jpg' } },
];

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

export default class setup extends Component {

  constructor(props) {
    super(props);
    // //这里放你自己定义的state变量及初始值
    this.state = {
      movies: null,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  }

  /**
   * 它会在组件刚加载完成的时候调用一次，以后不再会被调用
   */
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          movies: responseData.movies,
          dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
          loaded: true,
        });
      })
      .done();
  }

  render() {
    if (!this.state.movies) {
      return this.renderLoadingView();
    }
    var movie = this.state.movies[0];
    return this.renderMovie(movie);
  }

  renderLoadingView() {
    return (
      <View style={styles.containerLoadding}>
        <Text>
          正在加载电影数据……
        </Text>
      </View>
    );
  }

  renderMovie(movie) {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderItemMovie}
        style={styles.listView}
      />
    );
  }

  renderItemMovie(movie) {
    return (
      <View style={styles.listContainer}>
        <Image style={styles.listItemImage} source={{ uri: movie.posters.thumbnail }} />
        <View style={styles.listItemContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.year}>{movie.year}</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerLoadding: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginBottom: 4,
  },
  listItemImage: {
    width: 50,
    height: 50,
  },
  listItemContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  title: {
    fontSize: 20,
    marginBottom: 8,
    left: 10,
  },
  year: {
    left: 10,
  },
  listView: {
    backgroundColor: '#F5F5F5',
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
