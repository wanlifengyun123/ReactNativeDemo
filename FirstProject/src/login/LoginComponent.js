
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    BackAndroid,
    ToastAndroid,
    View
} from 'react-native';

import {
    HeaderComponent,
    EditView,
    LoginButton,
    NetUtil,
} from './../Export.js';

import ForgetComponent from './ForgetComponent';
import RegisterComponent from './RegisterComponent';
import HomeComponent from './HomeComponent';

export default class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
        };
    }

    render() {
        return (
            <View style={[styles.loginview, { padding: 0 }]}>
                <View>
                    <HeaderComponent
                        leftItemTitle="登录"
                        leftImageSource={require('./../../res/drawable/ic_arrow_back_white_24dp.png')}
                        leftItemFunc={this._leftItemAction.bind(this)}
                        rightItemTitle="注册"
                        rightItemFunc={this._rightItemAction.bind(this)}
                    />
                </View>
                <View style={[styles.loginview, { padding: 0 }]}>
                    {/*<View style={{
                        height: 50,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                    }}>
                        <Text style={{ color: "#4A90E2", textAlign: 'center', paddingRight: 25, }}
                            onPress={this._pressRegister.bind(this)}>
                            注册
                    </Text>
                    </View>*/}
                    <View style={styles.loginview}>
                        <View style={{
                            flexDirection: 'row', height: 60, marginTop: 1,
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                        }}>
                            <Image source={require('./../../res/drawable/raindrop.png')} />
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <EditView name='输入用户名/注册手机号' value={this.state.userName} onChangeText={(text) => {
                                this.setState({
                                    userName: text,
                                });
                            }} />
                            <EditView name='输入密码' secureTextEntry={true} value={this.state.password} onChangeText={(text) => {
                                this.setState({
                                    password: text,
                                });
                            }} />
                            <LoginButton name='登录' onPressCallback={this.onPressCallback.bind(this)} />
                            <Text style={{ color: "#4A90E2", textAlign: 'center', marginTop: 10 }}
                                onPress={this._pressForgetPassWord.bind(this)}>
                                忘记密码？
                    </Text>
                        </View>
                    </View>
                </View>
            </View>

        );
    }

    _leftItemAction() {
        const navigator = this.props.navigator;
        if (navigator) {
            navigator.pop();
        }
    }

    _rightItemAction() {
        let _this = this;
        const navigator = this.props.navigator;
        if (navigator) {
            navigator.push({
                name: 'RegisterComponent',
                component: RegisterComponent,
                params: {
                    name: this.state.userName,
                    setPassWord(name, pass) {
                        _this.setState({
                            userName: name,
                            password: pass,
                        });
                    },
                }
            });
        }
    }

    _pressForgetPassWord() {
        let _this = this;
        const navigator = this.props.navigator;
        if (navigator) {
            navigator.push({
                name: 'ForgetComponent',
                component: ForgetComponent,
                params: {
                    name: this.state.userName,
                    setPassWord: function (name, pass) {
                        _this.setState({
                            userName: name,
                            password: pass,
                        });
                    },
                }
            });
        }
    }

    onPressCallback = () => {
        if (!this.state.userName || this.state.userName.length === 0) {
            ToastAndroid.show("请输入用户名/注册手机号", 1000);
            return;
        }
        if (!this.state.password || this.state.password.length === 0) {
            ToastAndroid.show("请输入密码", 1000);
            return;
        }
        // let formData = new FormData();
        // formData.append("loginName", this.state.userName);
        // formData.append("pwd", this.state.password);
        // let url = "http://localhost:8080/loginApp";
        // NetUtil.postJson(url, formData, (responseText) => {
        //     alert(responseText);
        //     this.onLoginSuccess();
        // })
        const navigator = this.props.navigator;
        if (navigator) {
            navigator.pop();
        }
    };
}

BackAndroid.addEventListener('hardwareBackPress', () => {
    const _navigator = this.props.navigator;
    if (!_navigator) {
        return false;
    }
    if (_navigator.getCurrentRoutes().length === 1) {
        return false;
    }
    _navigator.pop();
    return true;
});

const styles = StyleSheet.create({
    loginview: {
        flex: 1,
        padding: 30,
        backgroundColor: '#ffffff',
        justifyContent: 'center',

    },
});