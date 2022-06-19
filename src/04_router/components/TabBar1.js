import { Component } from 'react'
import { NavLink } from 'react-router-dom'
import style from './css/tabbar.module.css'
export default class TabBar1 extends Component {
  render() {
    return (
      <div>
        {/* 声明式导航 */}
        <li><NavLink to="/films" activeClassName={style.active}>电影</NavLink></li>
        <li><NavLink to="/cinemas" activeClassName={style.active}>影院</NavLink></li>
        <li><NavLink to="/center" activeClassName={style.active}>我的</NavLink></li>
      </div>
    )
  }
}
