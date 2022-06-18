import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './css/tabbar.css'
export default class TabBar1 extends Component {
  render() {
    return (
      <div>
        {/* 声明式导航 */}
        <li><NavLink to="/films" activeClassName='nav-active'>电影</NavLink></li>
        <li><NavLink to="/cinemas" activeClassName='nav-active'>影院</NavLink></li>
        <li><NavLink to="/center" activeClassName='nav-active'>我的</NavLink></li>
      </div>
    )
  }
}
