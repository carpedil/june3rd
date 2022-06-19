import { Component } from 'react'
import { NavLink, Redirect, Route, Switch } from 'react-router-dom'
import style from './css/film.module.css'

import ComingSoon from './films/ComingSoon'
import NowPlaying from './films/NowPlaying'

export default class Film extends Component {
    render() {
        return (
            <div>
                <div style={{height:'100px',background:'yellow'}}>轮播图</div>
                <div>
                    <li>
                        <NavLink to="/films/nowplaying" activeClassName={style.active}>正在热映</NavLink>
                    </li>
                    <li>
                    <NavLink to="/films/comingsoon" activeClassName={style.active}>即将上映</NavLink>
                    </li>
                </div>
                <Switch>
                    <Route path="/films/nowplaying"><NowPlaying/></Route>
                    <Route path="/films/comingsoon"><ComingSoon/></Route>
                    <Redirect from="/films" to="/films/nowplaying" exact></Redirect>
                    {/* <Route component={NotFound}/> */}
                </Switch>
            </div>
        )
    }
}
