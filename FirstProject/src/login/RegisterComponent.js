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

export default class RegisterComponent extends Component {

    constructor(props) {
        super(props);
        this.userName = "";
        this.password = "";
        this.newPassword = "";
    }

    componentDidMount() {
        this.userName = this.props.name;
    }

    render() {
        return (
            <View style={styles.loginview}>
                <View>
                    <HeaderComponent
                        leftItemTitle="注册"
                        leftImageSource={require('./../../res/drawable/ic_arrow_back_white_24dp.png')}
                        leftItemFunc={this._leftItemAction.bind(this)}
                    />
                </View>
                <View style={{ marginTop: 10, padding: 30, justifyContent: 'center', }}>
                    <EditView name='输入手机号' onChangeText={(text) => {
                        if (text.length > 0) {
                            this.userName = text;
                        }
                    }} />
                    <EditView name='输入密码' secureTextEntry={true}  onChangeText={(text) => {
                        if (this.userName.length === 0) {
                            ToastAndroid.show("请输入用户名/注册手机号", 1000);
                            return;
                        }
                        this.password = text;
                    }} />
                    <EditView name='输入新密码'  secureTextEntry={true}  onChangeText={(text) => {
                        if (this.password.length === 0) {
                            ToastAndroid.show("输入新密码", 1000);
                            return;
                        }
                        this.newPassword = text;
                    }} />
                    <LoginButton name='注册' onPressCallback={this.onPressCallback.bind(this)} />
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

    onPressCallback() {
        if (this.userName.length === 0) {
            ToastAndroid.show("请输入用户名/注册手机号", 1000);
            return;
        }
        if (this.newPassword.length === 0) {
            ToastAndroid.show("请重新输入新密码", 1000);
            return;
        }
        const navigator = this.props.navigator;
        if (this.props.setPassWord) {
            this.props.setPassWord(this.state.userName, this.state.newPassword);
        }
        if (navigator) {
            navigator.pop();
        }
    }
}

const styles = StyleSheet.create({
    loginview: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
});