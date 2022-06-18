import { Component } from 'react'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'

import Center from '../views/center'
import Cinema from '../views/cinema'
import Detail from '../views/detail'
import Film from '../views/film3'
import NotFound from '../views/notfound'


// HashRouter 会在浏览器地址栏后面跟一个#号

export default class IndexRouter extends Component {
    render() {
        return (
            <div>
                <HashRouter>
                    {this.props.children}

                    <Switch>
                        <Route path='/films' component={Film}></Route>
                        {/* 动态路由 :id 中:号属于占位符*/}
                        <Route path='/film/:id' component={Detail}></Route>
                        <Route path='/cinemas' component={Cinema}></Route>
                        <Route path='/center' component={Center}></Route>
                        {/* 模糊匹配 */}
                        {/* <Redirect from='/' to='/3'></Redirect> */}
                        {/* 要精确匹配,加上exact即可 */}
                        <Redirect from='/' to='/films' exact></Redirect>
                        {/* 只要没有匹配的路径,就显示Not Found */}
                        <Route component={NotFound} />
                    </Switch>
                </HashRouter>
            </div>
        )
    }
}
