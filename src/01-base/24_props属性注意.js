import React, { Component } from 'react'
import NavBar from './componnents/navbar'

export default class App extends Component {
  /* NavBar组件中title和leftShow两个参数可能来自App组件的父组件传递的一个对象中的属性 */
  render() {
    let params = {
      title:"测试",
      leftShow: false
    }
    return (
      <div>
        <div>首页</div>
        {/* 传入参数title和isShow */}
        <NavBar title="首页" leftShow={false}></NavBar>
        <div>列表</div>
        {/* 此处不传leftShow参数,使用组件默认值 */}
        <NavBar title="列表"></NavBar>
        <div>购物车</div>
        {/* 此处不传leftShow参数,使用组件默认值 */}
        <NavBar title="购物车"></NavBar>
        <div>测试</div>
        {/* 此处不传leftShow参数,使用组件默认值 */}
        {/* 当对象中属性与组件参数属性一致时, 可以使用...obj进行解构进行传入 */}
        {/* <NavBar {...params}></NavBar> */}
        <NavBar title={params.title} leftShow={params.leftShow}></NavBar>
      </div>
    )
  }
}
