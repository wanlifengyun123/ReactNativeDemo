import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    Platform,
    TouchableOpacity,
    View
} from 'react-native';

var hasTitleView = false;
var hasLeftIconView = false;
var hasLeftTitleView = false;
var hasRightIconView = false;
var hasRightTitleView = false;

export default class HeaderComponent extends Component {

    // 设置默认值 相当于Java 中的public String name;可以在控件 中设ag: name='akshdksad'
    static defaultProps = {
        title: '',
        titleTextColor: '#FFFFFF',
        titleViewFunc() { },
        barBorderBottomColor: '#D4D4D4',
        barBorderBottomWidth: 0.8,
        statusbarShow: true,
        leftItemTitle: '',
        leftTextColor: '#FFFFFF',
        leftItemFunc() { },
        rightItemTitle: '',
        rightTextColor: '#FFFFFF',
        rightItemFunc() { },
        //leftImageSource: require('./nav_back.png'),
    };
    // 验证格式是否正确
    static propTypes = {
        title: PropTypes.string,          // nav标题
        titleTextColor: PropTypes.string, // nav标题颜色
        titleView: PropTypes.node,        // nav自定义标题View(节点) //可以被渲染的对象 numbers, strings, elements 或 array
        titleViewFunc: PropTypes.func,    // nav的titleView点击事件
        barBorderBottomColor: PropTypes.string,  // Bar底部线的颜色
        barBorderBottomWidth: PropTypes.number,  // Bar底部线的宽度
        statusbarShow: PropTypes.bool,     // 是否显示状态栏的20高度(默认true)
        leftItemTitle: PropTypes.string,   // 左按钮title
        leftImageSource: PropTypes.node,   // 左Item图片(source)
        leftTextColor: PropTypes.string,   // 左按钮标题颜色
        leftItemFunc: PropTypes.func,      // 左Item事件
        rightItemTitle: PropTypes.string,  // 右按钮title
        rightImageSource: PropTypes.node,  // 右Item图片(source)
        rightTextColor: PropTypes.string,  // 右按钮标题颜色
        rightItemFunc: PropTypes.func,     // 右Item事件
    };

    render() {

        // 判断是否有中间的title
        if (this.props.title && this.props.title.length > 0) {
            hasTitleView = true;
        }

        // 判断是否有leftIcon
        if (this.props.leftImageSource) {
            hasLeftIconView = true;
        }

        // 判断是否有leftTitle
        if (!hasTitleView && this.props.leftItemTitle && this.props.leftItemTitle.length > 0) {
            hasLeftTitleView = true;
        }

        // 判断是否有rightIcon
        if (this.props.rigrightImageSource) {
            hasRightIconView = true;
        }
        // 判断是否有hasRightTitleView
        if (this.props.rightItemTitle && this.props.rightItemTitle.length > 0) {
            hasRightTitleView = true;
        }

        // 判断是否显示20状态栏高度
        let showStatusbar = this.props.statusbarShow;
        if (Platform.OS === 'android') {
            // 安卓不显示
            showStatusbar = false;
        }

        if (hasLeftTitleView) {
            return this.renderLeftSource();
        } else {
            return this.renderSource();
        }
    }



    renderLeftSource() {
        return (
            <View style={styles.container}>
                <View style={styles.leftDiv}>
                    {
                        !hasLeftIconView
                            ?
                            <Text style={[styles.leftTitle, { color: this.props.leftTextColor }]}>
                                {this.props.leftItemTitle}
                            </Text>
                            : <View style={styles.leftIconDiv}>
                                <TouchableOpacity
                                    style={styles.leftClickIconDiv}
                                    onPress={this.props.leftItemFunc}>
                                    <Image style={styles.leftImage}
                                        source={this.props.leftImageSource} />

                                </TouchableOpacity>
                                <Text style={[styles.leftTitle, { color: this.props.leftTextColor }]}>
                                    {this.props.leftItemTitle}
                                </Text>
                            </View>
                    }
                </View>
                <View style={styles.rightDiv}>
                    {
                        !hasRightIconView
                            ?
                            <TouchableOpacity
                                style={styles.rightClickIconDiv}
                                onPress={this.props.rightItemFunc}>
                                <Text style={[styles.rightTitle, { color: this.props.rightTextColor }]}> 
                                {this.props.rightItemTitle}
                                 </Text>
                            </TouchableOpacity>
                            : <View style={styles.rightIconDiv}>
                                <TouchableOpacity
                                    style={styles.rightClickIconDiv}
                                    onPress={this.props.rightItemFunc}>
                                    <Image style={styles.leftImage}
                                        source={this.props.rightImageSource} />

                                </TouchableOpacity>
                            </View>
                    }
                </View>
                <View style={{ height: this.props.barBorderBottomWidth, backgroundColor: this.props.barBorderBottomColor }}></View>
            </View>
        );
    }

    renderSource() {
        return (
            <View style={styles.container}>
                <View style={[styles.leftDiv, { width: 50, }]}>
                    {
                        hasLeftIconView
                            ?
                            <TouchableOpacity
                                style={styles.leftClickIconDiv}
                                onPress={this.props.leftItemFunc}>
                                <Image style={styles.leftImage}
                                    source={this.props.leftImageSource} />

                            </TouchableOpacity>
                            : null
                    }
                </View>
                <View style={styles.nav_titleView}>
                    <Text style={[styles.nav_title, { color: this.props.titleTextColor }]}>
                        {this.props.title}
                    </Text>
                </View>
                <View style={[styles.rightDiv, { width: 50, }]}>
                    {
                        !hasRightIconView
                            ?
                            <Text style={[styles.rightTitle, { color: this.props.rightTextColor }]}>
                                {this.props.rightItemTitle}
                            </Text>
                            : <View style={styles.rightIconDiv}>
                                <TouchableOpacity
                                    style={styles.rightClickIconDiv}
                                    onPress={this.props.rightItemFunc}>
                                    <Image style={styles.leftImage}
                                        source={this.props.rightImageSource} />

                                </TouchableOpacity>
                            </View>
                    }
                </View>
                <View style={{ height: this.props.barBorderBottomWidth, backgroundColor: this.props.barBorderBottomColor }}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row',
        backgroundColor: '#3281DD',
    },
    leftDiv: {
        flex: 1,
        marginLeft: 8,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    leftIconDiv: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    leftClickIconDiv: {
        flexDirection: 'row',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    leftTitle: {
        marginRight: 5,
        marginLeft: 5,
        fontSize: 16,
    },
    leftImage: {
        width: 25,
        height: 25,

    },
    rightDiv: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    rightTitle: {
        marginRight: 8,
        marginLeft: 5,
        fontSize: 16,
    },
    rightIconDiv: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    rightClickIconDiv: {
        flexDirection: 'row',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    // 标题纯title
    nav_title: {
        fontSize: 17,
    },

    // titleView
    nav_titleView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});