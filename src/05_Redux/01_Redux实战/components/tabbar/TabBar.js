import { NavLink } from "react-router-dom"
import style from './css/tabbar.module.css'
export default function TabBar() {
    return (
        <div className={style.tabbar}>
            <ul>
                {/* 声明式导航 */}
                <li><NavLink to="/films" activeClassName={style.active}>电影</NavLink></li>
                <li><NavLink to="/cinemas" activeClassName={style.active}>影院</NavLink></li>
                <li><NavLink to="/center" activeClassName={style.active}>我的</NavLink></li>
            </ul>
        </div>
    )
}
