
import React, { Component } from 'react';

import {
    StyleSheet,
    ToolbarAndroid,
} from 'react-native';

export default class NarToolBar extends Component {

    static defaultProps = {
        title: '',
        titleColor: '',
        navIcon: '',
        backgroundColor: '',
        rightItemFunc() { },
    };

    static propTypes = {
        title: PropTypes.string,
        titleColor: PropTypes.string,
        navIcon: PropTypes.string,
        backgroundColor: PropTypes.string,
        rightItemFunc: PropTypes.func,
    }

    render() {
        return (
            <ToolbarAndroid
                style={styles.toolbar}
                navIcon={navIcon}
                onIconClicked={this.props.rightItemFunc}
                titleColor= {this.props.titleColor}
                title={this.props.title} />
        );
    }
}

const styles = StyleSheet.create({
    toolbar: {
        backgroundColor: '#4E8EF7',
        height: 56,
    }
});