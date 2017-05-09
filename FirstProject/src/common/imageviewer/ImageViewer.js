import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Animated,
    Dimensions,
} from 'react-native';



export default class ImageViewer extends Component {

    // 背景透明度渐变动画
    private fadeAnim = new Animated.Value(0);

    // 当前基准位置
    private standardPositionX = 0;

    // 整体位移，用来切换图片用
    private positionXNumber = 0;
    private positionX = new Animated.Value(0);

    private width = 0;
    private height = 0;

    private styles = styles(0, 0);

    // 是否执行过 layout. fix 安卓不断触发 onLayout 的 bug
    private hasLayout = false;

    constructor(props) {
        super(props);
        this.state = { text: '' };
        // 背景透明度渐变动画
        this.fadeAnim = new Animated.Value(0);
        // 当前基准位置
        this.tandardPositionX = 0;
        // 整体位移，用来切换图片用
        this.positionXNumber = 0;
        this.positionX = new Animated.Value(0);

        this.width = 0;
        this.height = 0;
        // 是否执行过 layout. fix 安卓不断触发 onLayout 的 bug
        this.hasLayout = false;
    }

    render() {
        return (
            <View style={LoginStyles.TextInputView}>
                <TextInput style={LoginStyles.TextInput}
                    placeholder={this.props.name}
                    value={this.props.value}
                    secureTextEntry={this.props.secureTextEntry}
                    onChangeText={
                        (text) => {
                            this.setState({ text });
                            this.props.onChangeText(text);
                        }
                    }
                />
            </View>
        );
    }
}