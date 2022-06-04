import React, { Component } from 'react'

export default class App extends Component {
    /* 
        受控组件作用就是让父组件的state作为子组件条件渲染的唯一数据源???
    */
    state = {
        username: "cpx"
    }
    render() {
        return (
            <div>
                <h1>Login</h1>
                {/* 此处的input输入框可以看作一个受控组件,因为它的输入框的值完全取决于父组件App的state.username的值 */}
                <input type="text" value={this.state.username} onChange={(event) => {
                    /* 添加onChange事件监听,可以实时根据input内值的变化跟新父组件的state */
                    this.setState({
                        username: event.target.value
                    })
                }} />
                <button onClick={(event) => {
                    console.log(this.state.username)
                }}>Login</button>
                <button onClick={() => {
                    this.setState({
                        username : ''
                    })
                }}>Reset</button>
                {/* Child组件需要接收父组件的username , 父组件的state一更新, Child组件内部的props也会更新*/}
                <Child username={this.state.username}></Child>
            </div>
        )
    }
}


class Child extends Component {
    render() {
        let { username } = this.props
        return (
            <div>
                <hr/>
                <h5>Current UserName:{username}</h5>
            </div>
        )
    }
}
