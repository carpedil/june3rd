import React, { Component } from 'react'

export default class App extends Component {
    state = {
        txt: "111"
    }
    render() {
        return (
            <div>
                父组件 - {this.state.txt}
                <button onClick={()=>{
                    this.setState({
                        txt: "222"
                    })
                    console.log(this.state.txt) /* 点击后state更新 */
                }}>click</button>
                
                <Child txt={this.state.txt}></Child>
            </div>
        )
    }
}


class Child extends Component {
    render() {
        let { txt } = this.props
        return (
            <div>
                Child -{txt}
                <button onClick={()=>{
                    this.props.txt = "333"
                    console.log(this.props.txt) /* 点击会报错 */
                }}>click</button>
            </div>
        )
    }
}

/* state vs props
    相同点:
    都是纯js对象,都会触发render函数更新, 都具有确定性(状态/属性相同,结果相同)

    不同点:
    1. 属性能从父组件获取, 状态不能
    2. 属性可以由父组件修改, 状态不能
    3. 属性能在内部设置默认值,状态也可以,设置方式不同
    4. 属性不在组件内部修改,状态要在组件内部修改
    5. 属性能设置子组件初始值,状态不可以
    6. 属性可以修改子组件的值,状态不可以

    state 的主要作用是用于组件保存、控制、修改自己的可变状态,state在组件内部初始化,可
    以被组件自身修改,而外部不能访问也不能修改state, state是一个局部的,只能被组件自身
    控制的数据源,state中状态可以通过this.setState()方法进行更新,setState函数回导致
    组件重新渲染

    props的主要作用是让使用该组件的父组件可以传入参数,来配置该组件, 它是外部传进来的配置参数
    组件内部无法控制也无法修改,除非外部组件主动传入新的props,否则组件的props永远保持不变

    没有state的组件叫无状态组件,设置了state的叫做有状态组件, 因为状态会带来管理的复杂性,推荐
    尽量多写无状态组件,可以降低代码维护的难度,增强组件的可复用性

    (受控组件)
    (非受控组件)
*/