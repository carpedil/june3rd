import { Component } from 'react'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'

import Center from '../views/center'
import Cinema from '../views/cinema'
import Film from '../views/film2'
import NotFound from '../views/notfound'


// HashRouter 会在浏览器地址栏后面跟一个#号

export default class IndexRouter extends Component {
    render() {
        return (
            <div>
                <HashRouter>
                    <Switch>
                        <Route path='/films'><Film /></Route>
                        <Route path='/cinemas'><Cinema /></Route>
                        <Route path='/center'><Center /></Route>
                        {/* 模糊匹配 */}
                        {/* <Redirect from='/' to='/3'></Redirect> */}
                        {/* 要精确匹配,加上exact即可 */}
                        <Redirect from='/' to='/films' exact></Redirect>
                        {/* 只要没有匹配的路径,就显示Not Found */}
                        <Route component={NotFound}/>
                    </Switch>
                </HashRouter>
            </div>
        )
    }
}
