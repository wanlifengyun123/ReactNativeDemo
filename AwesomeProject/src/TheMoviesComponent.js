
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    ListView,
    Navigator,
    TouchableOpacity,
    View
} from 'react-native';

import TheMoviesDetailComponent from './TheMoviesDetailComponent.js';

// import ToolBarAndroidDemo from './ToolBarAndroidDemo.js';
// var REQUEST_URL = 'http://api.themoviedb.org/3/tv/popular?api_key=87a901020f496977f9d6d508c5d186ec&page=1&language=zh';
var REQUEST_URL = 'http://www.imooc.com/api/courselist?uid=3911288&page=0&timestamp&easy_type&cat_type&all_type';

export default class TheMoviesComponent extends Component {

    //这里放你自己定义的state变量及初始值
    constructor(props) {
        super(props);
        this.state = {
            // 创建ListView的数据源
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: false,
        };
    }

   /**
    * 在第一次渲染后调用
    * 它会在组件刚加载完成的时候调用一次，以后不再会被调用
    * componentWillMount 在渲染前调用,在客户端也在服务端
    */
    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.data),
                    loaded: true,
                });
            })
            .done();
    }

    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }
        return this.renderListView();
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

    renderListView() {
        return (
            <View>
                <View style={styles.containerHeaderView}>
                    <Text style={styles.containerHeaderText}>CustomListHeader</Text>
                </View>
                <ListView
                    dataSource={this.state.dataSource} // 数据源
                    renderRow={this.renderListItemView.bind(this)} //每一行的显示
                />
            </View>

        );
    }

    renderListItemView(movie) {
        return (
            <TouchableOpacity
                underlayColor='#F5FCFF'
                onPress={() => this._pressRow(movie)}>

                <View style={styles.container}>
                    <Image
                        source={{ uri: movie.pic }}
                        style={styles.thumbnail}
                    />
                    <View style={styles.containerItem}>
                        <Text style={styles.title}>{movie.name}</Text>
                        <Text style={styles.year}>{movie.short_description}</Text>
                    </View>
                </View>

            </TouchableOpacity>
        );
    }

    _pressRow(movie) {
        const { navigator } = this.props;
        if (navigator) {
            //navigator.pop 使用当前页面出栈, 显示上一个栈内页面.
            // navigator.pop();
            //navigator.push 传入name和你想要跳的组件页面
            navigator.push({
                name: "TheMoviesDetailComponent",
                component: TheMoviesDetailComponent,
                params: {
                    name: movie.name,
                    movieId: movie.id,
                }
            });
        }
    }
}

const styles = StyleSheet.create({
    containerHeaderView: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EE4000',
    },
    containerHeaderText: {
        // width:200,
        // height: 50,
        // justifyContent: 'center',
        // alignSelf:'center',
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 16,
        left: 16,
    },
    containerLoadding: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        marginBottom: 4,
        padding: 16,
    },
    containerItem: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        flexWrap: 'wrap',
        marginLeft: 10,
    },
    thumbnail: {
        width: 100,
        height: 81,
    },
    title: {
        fontSize: 14,
        marginBottom: 10,
        color: '#444444',

    },
    year: {

    },
});