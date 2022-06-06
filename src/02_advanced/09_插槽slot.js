import React, { Component } from 'react'

// 插槽用途:
//  1. 为了复用
//  2. 一定程度上减少父子通信


export default class App extends Component {
    render() {
        return (
            <div>
                <h2>插槽</h2>
                <Child>
                    {/* div不会展示 ,如果需要将div展示,需要在Child组件内部添加一个插槽Children*/}
                    <div>2222</div>
                    <div>1111</div>
                    <div>3333</div>
                </Child>
            </div>
        )
    }
}


class Child extends Component {
    render() {
        return (
            <div>
                children
                {this.props.children}
            </div>
        )
    }
}
