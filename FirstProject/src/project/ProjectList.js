
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    ListView,
    TouchableOpacity,
    BackAndroid,
    View
} from 'react-native';

import ProjectDetail from './ProjectDetail';

var _navigator;

export default class ProjectList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 }),
            loaded: false,
        };
    }

    componentDidMount() {
        _navigator = this.props.navigator;
        this.fetchData();
    }

    fetchData() {
        fetch('http://www.imooc.com/api/courselist?uid=3911288&page=0&timestamp&easy_type&cat_type&all_type')
            .then((response) => response.json())
            .then((responseData) => {
                console.info("加载项目完成：", responseData.data);
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.data),
                    loaded: true
                });
            })
            .done();
    }

    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }
        return this.renderListView();
    }

    renderLoadingView() {
        return (
            <View style={styles.containerLoadding}>
                <Text>
                    正在加载数据……
                </Text>
            </View>
        );
    }

    renderListView() {
        return (
            <View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderListItemView.bind(this)}
                    style={styles.projectListView} />
            </View>
        );
    }

    renderListItemView(project) {
        return (
            <TouchableOpacity
                underlayColor='#F5FCFF'
                onPress={() => this.props.onItemClick(project)}>

                <View style={styles.container}>
                    <Image
                        source={{ uri: project.pic }}
                        style={styles.thumbnail}
                    />
                    <View style={styles.containerItem}>
                        <Text style={styles.title}>{project.name}</Text>
                        <Text style={styles.title}>{project.short_description}</Text>
                        <Text style={styles.year}>{project.numbers} 成员 | {project.duration} 关注 | {project.media} 议题 </Text>
                    </View>
                </View>

            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    containerLoadding: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    projectListView: {
        marginBottom: 4,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        marginBottom: 4,
        padding: 16,
    },
    containerItem: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        flexWrap: 'wrap',
        marginLeft: 10,
    },
    thumbnail: {
        width: 100,
        height: 81,
    },
    title: {
        fontSize: 14,
        marginBottom: 10,
        color: '#444444',
    },
    year: {
        color: '#4E8EF7',
    },
});