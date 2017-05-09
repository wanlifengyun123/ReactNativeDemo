
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    PixelRatio,
    TouchableHighlight,
    TouchableOpacity,
    Alert,
    BackAndroid,
} from 'react-native';


const MENU = ['前端开发', '后端开发', '移动开发', '数据库', '云计算&大数据', '运维&测试', 'UI设计'];

export default class MenuList extends Component {
    constructor() {
        super();
        var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });//如果两次的数据不同的话，告诉数据源该数据发生了改变

        this.state = {
            dataSource: ds.cloneWithRows(MENU),
        }
    }

    renderHeader() {
        return (
            //切记：height：null width:null 要设置,否则height width会图片原有的宽度
            //{ uri:'http://img.mukewang.com/58d9f6010001f2d012000460.jpg'}
            <Image resizeMode='cover' style={styles.headImg}
                source={require('./../../res/drawable/topinfo_ban_bg.jpg')}>
                <View style={[styles.headOpacity]} />

                <View style={[styles.headImg, { justifyContent: 'center', alignItems: 'center' }]}>

                    <View style={styles.headText}>
                        {/*<Text style={{ color: '#e3e3e2' }}>登陆网易云音乐</Text>
                        <Text style={{ color: '#e3e3e2', marginTop: 5 }}>320K高音质无限下载,手机电脑多端同步</Text>*/}
                    </View>

                    <TouchableOpacity activeOpacity={0.5} style={{ marginTop: 30 }} onPress={() => this.onSelectItem(-1)}>
                        <View style={styles.login}>
                            <Text style={{ color: '#fff' }}>立即登录</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </Image>
        );
    }

    renderRow(data, sectionID, rowID) {
        var image;
        switch (rowID) {
            case '0':
                image = require('./../../res/drawable/opmenu_icn_msg.png');
                break;
            case '1':
                image = require('./../../res/drawable/topmenu_icn_store.png');
                break;
            case '2':
                image = require('./../../res/drawable/topmenu_icn_member.png');
                break;
            case '3':
                image = require('./../../res/drawable/topmenu_icn_free.png');
                break;
            case '4':
                image = require('./../../res/drawable/topmenu_icn_identify.png');
                break;
            case '5':
                image = require('./../../res/drawable/topmenu_icn_skin.png');
                break;
            case '6':
                image = require('./../../res/drawable/topmenu_icn_night.png');
                break;
            // case '7':
            //     image = require('./../../res/drawable/topmenu_icn_time.png');
            //     break;
            // case '8':
            //     image = require('./../../res/drawable/topmenu_icn_clock.png');
            //     break;
            // case '9':
            //     image = require('./../../res/drawable/topmenu_icn_vehicle.png');
            //     break;
            default:
        }

        return (
            <View style={{ flex: 1 }}>
                <TouchableHighlight underlayColor='#ddd' onPress={() => this.onSelectItem(rowID)}>
                    <View style={styles.item} >
                        <Image style={{ width: 40, height: 40 }} source={image} />
                        <Text style={{ color: '#333333', marginLeft: 5, fontSize: 16 }}>{data}</Text>
                    </View>
                </TouchableHighlight>
                {rowID == 3 ? <View style={{ backgroundColor: '#d8dadb', height: 1 / PixelRatio.get() }} /> : null}
            </View>
        );
    }
    /**
     每项点击
    **/
    onSelectItem(position) {
        var func = this.props.onMenuItem;
        func && func(position);
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <ListView
                    style={{ backgroundColor: '#ebedee' }}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                    renderHeader={this.renderHeader.bind(this)}
                />

                <View style={{ flexDirection: 'row', height: 46, alignItems: 'center' }}>
                    <TouchableHighlight style={{ flex: 1 }} underlayColor='#ddd' onPress={() => alert('设置')}>
                        <View style={styles.btn}><Text>设置</Text></View>
                    </TouchableHighlight>
                    <View style={{ backgroundColor: '#d8dadb', width: 1 / PixelRatio.get(), height: 20, }} />
                    <TouchableHighlight style={{ flex: 1 }} underlayColor='#ddd'
                        onPress={() => {
                            Alert.alert('退出应用', '确定要退出吗?',
                                [
                                    { text: '确定', onPress: () => { BackAndroid.exitApp() } },
                                    { text: '取消', onPress: () => { } }
                                ]
                            );
                        }
                        }>
                        <View style={styles.btn}><Text>退出应用</Text></View>
                    </TouchableHighlight>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    headImg: {
        height: 160,
        width: 300,
    },
    headOpacity: {
        height: 160,
        width: 300,
        backgroundColor: '#000',
        opacity: 0.2,
        position: 'absolute',
    },
    headText: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    login: {
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 3,
        height: 33,
        width: 142,
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
    },
    btn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});