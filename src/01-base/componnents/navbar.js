import React, { Component } from 'react'

export default class NavBar extends Component {
    render() {
        /* ES6解构参数 ,解构参数名需要与传入参数一致 */
        let {title,isShow} = this.props
        return (
            <div>
                {isShow && <button>返回</button>}
                -{title}-
                {!isShow && <button>我的</button>}
            </div>
        )
    }
}
