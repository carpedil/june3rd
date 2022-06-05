import React, { Component } from 'react'

export default class App extends Component {

    state = {
        isShow: true
    }
    render() {
        return (
            <div>
                app - {JSON.stringify(this.state.isShow)}
                <NavBar isShow={() => {
                    this.handelEvent()
                }}></NavBar>
                {this.state.isShow && <SideBar></SideBar>}
            </div>
        )
    }
    handelEvent() {
        console.log('父组件更新状态')
        let ret = !this.state.isShow
        this.setState({
            isShow: ret
        })
    }
}


class NavBar extends Component {
    render() {
        return (
            <div style={{ background: "red" }}>
                NavBar<button onClick={() => {
                    this.handelClick()
                }}>click</button>
            </div>
        )
    }

    handelClick = () => {
        console.log('子组件通知父组件更新状态')
        this.props.isShow()
    }
}

class SideBar extends Component {
    render() {
        return (
            <div style={{ background: "yellow", height: "300px", width: "200px" }}>
                <ul>
                    <li>首页</li>
                    <li>用户管理</li>
                    <li>订单管理</li>
                </ul>
            </div>
        )
    }
}