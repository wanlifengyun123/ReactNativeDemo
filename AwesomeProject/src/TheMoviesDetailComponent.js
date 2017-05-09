import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    TouchableHighlight,
    View
} from 'react-native';

import TheMoviesComponent from './TheMoviesComponent.js';

var REQUEST_URL = 'http://www.imooc.com/api/getcpinfo?uid=3911288&cid=709';

export default class TheMoviesDetailComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movice: null,
            name: null,
            movieId: null,
            loaded: false,

            chapters:null,
        };
    }

    componentDidMount() {
        //这里获取从FirstPageComponent传递过来的参数: id  
        this.setState({
            name: this.props.name,
            movieId: this.props.movieId,
        });
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
        return <View style={styles.container}>
            <View style={styles.containerHeaderView}>
                <TouchableHighlight
                    onPress={() => this._pressBack.bind(this)}>
                    <Image
                        style={styles.containerHeaderImage}
                        source={require('./ic_back.png')} >
                    </Image>
                </TouchableHighlight>

                <Text style={styles.containerHeaderText}>{this.state.name}</Text>
            </View>
            
        </View>
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

    _pressBack(){
        const { navigator } = this.props;
        if (navigator) {
            //navigator.pop 使用当前页面出栈, 显示上一个栈内页面.
            navigator.pop();
        }
    }
}

const styles = StyleSheet.create({
    containerLoadding: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    containerHeaderView: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EE4000',
    },
    containerHeaderImage: {
        width: 40,
        height: 20,
        left: 16,
    },
    containerHeaderText: {
        // width:200,
        // height: 50,
        // justifyContent: 'center',
        // alignSelf:'center',
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 16,
        marginLeft: 5,
        left: 16,
    },
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
        alignSelf: 'auto',
    },
});