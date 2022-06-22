import { NavLink, Redirect, Route, Switch } from "react-router-dom"
import ComingSoon from "../comingsoon/ComingSoon"
import NowPlaying from "../nowplaying/NowPlaying"
import style from "./css/films.module.css"

export default function Film() {
    return (
        <div>
            <div style={{ height: '100px', background: 'yellow' }}>轮播图</div>
            <div className={style.navbar}>
                <ul>
                    <li>
                        <NavLink to="/films/nowplaying" activeClassName={style.active}>正在热映</NavLink>
                    </li>
                    <li>
                        <NavLink to="/films/comingsoon" activeClassName={style.active}>即将上映</NavLink>
                    </li>
                </ul>
            </div>
            <Switch>
                <Route path="/films/nowplaying"><NowPlaying /></Route>
                <Route path="/films/comingsoon"><ComingSoon /></Route>
                <Redirect from="/films" to="/films/nowplaying" exact></Redirect>
            </Switch>
        </div>
    )
}