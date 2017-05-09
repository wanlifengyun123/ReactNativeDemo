/**
 * <plusmancn@gmail.com> created at 2017
 *
 * Copyright (c) 2017 Souche.com, all rights
 * reserved.
 *
 * 非栈顶不进行渲染
 */
import React, {
    PropTypes
} from 'react';

export default class StaticContainer extends React.Component {
    static propTypes = {
        isActive: PropTypes.bool.isRequired
    };

    // 件在决定重新渲染（虚拟dom比对完毕生成最终的dom后）之前会调用该函数，
    // 该函数将是否重新渲染的权限交给了开发者，该函数默认直接返回true，表示默认直接出发dom更新
    shouldComponentUpdate(nextProps) {
        return this.props.isActive !== nextProps.isActive;
    }

    render() {
        let {children} = this.props;
        return children ? React.Children.only(children) : null;
    }
}
