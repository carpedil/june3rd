import React, { Component } from 'react'
import NavBar from './componnents/navbar'

export default class App extends Component {
  render() {
    return (
      <div>
          <div>首页</div>
          {/* 传入参数title和isShow */}
          <NavBar title="首页" leftShow={false}></NavBar>
          <div>列表</div>
          <NavBar title="列表" leftShow={true}></NavBar>
          <div>购物车</div>
          <NavBar title="购物车" leftShow={true}></NavBar>
      </div>
    )
  }
}
