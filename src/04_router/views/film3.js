import { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import ComingSoon from './films/ComingSoon'
import NowPlaying from './films/NowPlaying'

export default class Film extends Component {
    render() {
        return (
            <div>
                <div style={{height:'100px',background:'yellow'}}>轮播图</div>
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
