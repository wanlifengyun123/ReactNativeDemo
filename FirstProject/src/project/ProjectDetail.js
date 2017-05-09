
import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    Text,
    ScrollView,
    Dimensions,
    TouchableOpacity,
    Video,
    Alert,
    View
} from 'react-native';

import { Provider } from 'react-redux';

import {
    HeaderComponent,
} from './../Export.js';

var screenWidth = Dimensions.get('window').width;  // 获取屏幕的宽度

var picUrls = [];
var chapters = [];
var medias = [];

export default class ProjectDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: null,
            mediaArray:[],
        };
    }

    componentDidMount() {
        //这里获取从FirstPageComponent传递过来的参数: id  
        this.setState({
            name: this.props.name,
        });
        this.fetchData();
    }

    fetchData() {
        fetch('http://www.imooc.com/api/getcpinfo?uid=3911288&cid=709')
            .then((response) => response.json())
            .then((responseData) => {
                for(var i = 0;i < responseData.data[0].media.length;i++){
                    picUrls[i] = responseData.data[0].media[i].pic;
                }
                for(var i = 0;i < responseData.data.length;i++){
                    chapters[i] = responseData.data[i].chapter;
                    for (var j = 0;j< responseData.data[i].media.length;j++){
                        medias[j] = responseData.data[i].media[j];
                    }
                }
                this.setState({
                    mediaArray: responseData.data,
                });
            })
            .done();
    }

    render() {
        return <View style={styles.container}>
            <Provider/>
            <View>
                <HeaderComponent
                    leftItemTitle="课件详情"
                    leftImageSource={require('./../../res/drawable/ic_arrow_back_white_24dp.png')}
                    leftItemFunc={this._leftItemAction.bind(this)}
                />
            </View>
            <ScrollView  style={styles.containerItem}>
                {
                    chapters.map(function (el, index) {
                        return (
                        <View style={styles.itemMainView}>
                            <TouchableOpacity
                                underlayColor='#F5FCFF'
                                onPress={() => this._onItemClick(index)}
                                style={styles.itemMainTouch}
                            >
                                <Text style={styles.itemMainTitle}>第{chapters[index].seqid}章 {chapters[index].name}</Text>
                            </TouchableOpacity>
                            {
                                medias.map(function (el, index) {
                                    return (
                                        <View style={styles.itemSubView}>
                                            <Text
                                                style={styles.itemSubTitle}>{medias[index].type}-{medias[index].seqid} {medias[index].name}</Text>
                                        </View>
                                    );
                                })
                            }
                        </View>
                        );
                    })
                }
            </ScrollView>
        </View>
    }


    _leftItemAction() {
        const navigator = this.props.navigator;
        if (navigator) {
            navigator.pop();
        }
    }

    _onItemClick(index){
        alert("index:" + index);
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#F5FCFF',
        flexDirection: 'column',
    },
    containerItem: {
        flexDirection: 'column',
        backgroundColor:'#FFFFFF',
    },
    itemMainView: {
        justifyContent:'center',
        alignItems:'flex-start',
        flexDirection: 'column',
        marginBottom:2,
    },
    itemSubView: {
        justifyContent:'center',
        alignItems:'flex-start',
        backgroundColor:'#FFFFFF',
        flexDirection: 'column',
        height: 45,
        marginBottom:2,
    },

    itemMainTouch: {
        justifyContent:'center',
        alignItems:'flex-start',
        backgroundColor:'#FFFFFF',
        flexDirection: 'column',
        height: 45,
        marginBottom:2,
    },
    itemMainTitle: {
        fontSize: 14,
        color: '#444444',
        fontWeight:'bold',
        marginLeft:16,
        alignItems:'center',
    },
    itemSubTitle: {
        fontSize: 14,
        color: '#444444',
        marginLeft:32,
    },
});

// itemImg: {
//     width:(screenWidth - 32 ),
//         height: (screenWidth - 32 ) / 2,
//         padding:5,
//         backgroundColor:'red',
//         justifyContent:'center',
// },