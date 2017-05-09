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

export default class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            newPassword: '',
        };
    }

    componentDidMount() {
        this.setState({
            userName: this.props.name,
        });
    }

    render() {
        return (
            <View style={styles.loginview}>
                <View>
                    <HeaderComponent
                        leftItemTitle="忘记密码"
                        leftImageSource={require('./../../res/drawable/ic_arrow_back_white_24dp.png')}
                        leftItemFunc={this._leftItemAction.bind(this)}
                    />
                </View>
                <View style={{ marginTop: 10, padding: 30, justifyContent: 'center', }}>
                    <EditView name='输入用户名/注册手机号' value={this.state.userName} onChangeText={(text) => {
                        if (text.length > 0) {
                            this.setState({
                                userName: text,
                            });
                        }
                    }} />
                    <EditView name='输入密码' secureTextEntry={true}  onChangeText={(text) => {
                        this.setState({
                            password: text,
                        });
                    }} />
                    <EditView name='输入新密码' secureTextEntry={true}  onChangeText={(text) => {
                        this.setState({
                            newPassword: text,
                        });
                    }} />
                    <LoginButton name='重置密码' onPressCallback={this.onPressCallback.bind(this)} />
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
        if (!this.state.userName || this.state.userName.length === 0) {
            ToastAndroid.show("请输入用户名/注册手机号", 1000);
            return;
        }
        if (!this.state.password || this.state.password.length === 0) {
            ToastAndroid.show("请输入密码", 1000);
            return;
        }
        if (!this.state.newPassword || this.state.newPassword.length === 0) {
            ToastAndroid.show("请输入新密码", 1000);
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