import React, { Component } from 'react'
import NavBar from './componnents/navbar'
import SideBar from './componnents/sidebar'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* 类组件 */}
        <NavBar title="类组件" leftShow={false}></NavBar>
        {/* 函数式组件 */}
        <SideBar bg="yellow" position="right"></SideBar>
      </div>
    )
  }
}
