import React, { Component } from 'react'
import propTypes from 'prop-types'

export default class NavBar extends Component {

    /* 写法2 ES7 , static关键字用于标识类公共属性,可以直接通过类.属性名获取 */
    static propTypes = {
        title: propTypes.string,
        leftShow: propTypes.bool
    }

    /* 如果需要给组件的属性设定默认值, 可以按照属性验证的方法进行约定: */
    static defaultProps ={
        leftShow :true
    }

    
    render() {
        /* ES6解构参数 ,解构参数名需要与传入参数一致 */
        let {title,leftShow} = this.props
        return (
            <div>
                {leftShow && <button>返回</button>}
                -{title}-
                <button>我的</button>
            </div>
        )
    }
}

/* 对于传入当前组件的参数,可以按照如下方式进行限定,以确保组件的可用性 */
/* 写法1: ES6 */
/* NavBar.propTypes = {
    title: propTypes.string,
    isShow: propTypes.bool
} */
