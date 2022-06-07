import React, { Component } from 'react'

export default class App extends Component {

    state = {
        isShow: true
    }
    render() {
        return (
            <div>
                app - {JSON.stringify(this.state.isShow)}
                <NavBar>
                    {/* button标签会作为插槽放入NavBar中, Button作为App的子组件,可以直接访问父组件的state属性 */}
                    <button onClick={()=>{
                        this.setState({
                            isShow:!this.state.isShow
                        })
                    }}>click</button>
                </NavBar>
                {this.state.isShow && <SideBar></SideBar>}
                {/* 利用插槽实现组件复用, 轮播图组件 */}
                <Swipper>
                    <div><textarea></textarea></div>
                </Swipper>
            </div>
        )
    }
}


class NavBar extends Component {
    render() {
        return (
            <div style={{ background: "red" }}>
                NavBar
                {/* 放置插槽 */}
                {this.props.children}
            </div>
        )
    }
}

class SideBar extends Component {
    render() {
        return (
            <div style={{ background: "yellow", height: "300px", width: "100px" }}>
                <ul>
                    <li>首页</li>
                    <li>用户管理</li>
                    <li>订单管理</li>
                </ul>
            </div>
        )
    }
}

class Swipper extends Component {
    render() {
        return (
            <div style={{ background: "#64BDF0", height: "150px", width: "100%" }}>
                {this.props.children}
            </div>
        )
    }
}