import React, { Component } from 'react'

export default class App extends Component {
    state={
        name:''
    }
    // UNSAFE_加上之后就不会有对应警告
    UNSAFE_componentWillMount(){
        console.log('componentWillMount() ....',document.getElementById('name'))
        // 第一次上树, 最后一次修改状态的机会
        // 适用于状态初始化,定义等场景
        this.setState({
            name:'jack'
        })
    }

    componentDidMount(){
        // 适用于数据请求、订阅函数的调用、事件监听setInterval、基于创建完成的dom进行初始化操作等场景, 如axios....
        console.log('componentDidMount() ....',document.getElementById('name'))

    }
    render() {
        // 主要用于渲染页面
        console.log('render() ....')
        return (
            <div>
                <h1>生命周期-初始化阶段</h1>
                <div id='name'>{this.state.name}</div>
            </div>
        )
    }
    
}
