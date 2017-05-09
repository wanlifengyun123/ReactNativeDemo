

import React, { Component } from 'react';
import {
    ListView,
    DrawerLayoutAndroid,
    BackAndroid,
    Dimensions,
    Platform,
    Alert,
    View
} from 'react-native';

import {
    HeaderComponent,
    MenuList,
} from './../Export.js';

import ProjectList from './../project/ProjectList.js';
import ProjectDetail from './../project/ProjectDetail.js';
import LoginComponent from './LoginComponent.js';

var _navigator;

export default class HomeComponent extends Component {

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 });
        this.state = {
            dataSource: ds.cloneWithRows(['CLOTHES', 'PACKAGES', 'SHOES',]),
        };

    }

    componentWillMount() {
        _navigator = this.props.navigator;
        //因为本文件是安卓，所以不需要改判断
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid.bind(this));
        }
    }

    /**
   返回true,不进行退出，返回false 退出
   **/
    onBackAndroid() {
        if (_navigator.getCurrentRoutes().length === 1) {
            if (this.state.isMenuOpen) {
                this._closeDrawer();
                return true;
            }else {
                Alert.alert('退出应用', '确定要退出吗?',
                    [
                        { text: '确定', onPress: () => { BackAndroid.exitApp() } },
                        { text: '取消', onPress: () => { } }
                    ]
                );
            }
        }
        _navigator.pop();
        return true;
    }

    _openDrawer() {
        this.refs.drawerLayout.openDrawer();
    }

    _closeDrawer() {
        this.refs.drawerLayout.closeDrawer();
    }

    _DrawerStateChanged(_state) {
        console.log(_state);
    }

    onMenuItem(position) {
        if (position === -1) {
            this._login();
            return;
        }
        alert(position);
    }

    _login() {
        const navigator = this.props.navigator;
        if (navigator) {
            navigator.push({
                name: 'LoginComponent',
                component: LoginComponent,
                params: {

                }
            });
        }
    }

    render() {
        var _navigationView = (
            <MenuList
                onMenuItem={this.onMenuItem.bind(this)}
            />
        );
        return (
            <DrawerLayoutAndroid
                ref={'drawerLayout'}
                drawerBackgroundColor="#FFFFFF"
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => _navigationView}
                onDrawerOpen={() => { this.setState({ isMenuOpen: true }); }}
                onDrawerClose={() => { this.setState({ isMenuOpen: false }); }}
                onDrawerSlide={() => console.log("正在交互......")}
                onDrawerStateChanged={(state) => this._DrawerStateChanged(state)}
                drawerLockMode='unlocked'
                keyboardDismissMode="on-drag"
                statusBarBackgroundColor='red'
            >
                <View style={{ flex: 1 }}>
                    <View>
                        <HeaderComponent
                            leftItemTitle="慕客网"
                            leftImageSource={require('./../../res/drawable/ic_menu_white.png')}
                            leftItemFunc={this._openDrawer.bind(this)}
                        />
                        <ProjectList onItemClick={this._pressRow}/>
                    </View>
                </View>
            </DrawerLayoutAndroid>
        );
    }

    _pressRow(project) {
        if (_navigator) {
            _navigator.push({
                name: 'ProjectDetail',
                component: ProjectDetail,
                params: {
                    name: 'Zhe laskdjlsakdla',
                }
            });
        }
    }
}
