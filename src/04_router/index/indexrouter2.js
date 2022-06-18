import { Component } from 'react'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'

import Center from '../views/center'
import Cinema from '../views/cinema'
import Film from '../views/film'
import NotFound from '../views/notfound'


// HashRouter 会在浏览器地址栏后面跟一个#号

export default class IndexRouter extends Component {
    render() {
        return (
            <div>
                <HashRouter>
                    <Switch>
                        <Route path='/1'><Film /></Route>
                        <Route path='/2'><Cinema /></Route>
                        <Route path='/3'><Center /></Route>
                        {/* 模糊匹配 */}
                        {/* <Redirect from='/' to='/3'></Redirect> */}
                        {/*  */}
                        <Redirect from='/' to='/3' exact></Redirect>
                        {/* 只要没有匹配的路径,就显示Not Found */}
                        <Route component={NotFound}/>
                    </Switch>
                </HashRouter>
            </div>
        )
    }
}
