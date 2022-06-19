import { Component } from 'react'
// 路由模式: BrowserRouter & HashRouter
/**
 * HashRouter : 不会向后端发起页面请求
 * BrowserRouter :没有#的路径，好看，真正朝后端发请求要页面，后端没有对应
的路径处理路径，就会404，不好看。
 */
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

import Center from '../views/center'
import Cinema from '../views/cinema'
import Detail from '../views/detail'
import Film from '../views/film3'
import Login from '../views/Login'
import NotFound from '../views/notfound'


function isAuth(){
    return localStorage.getItem('token')
}

// HashRouter 会在浏览器地址栏后面跟一个#号

export default class IndexRouter extends Component {
    render() {
        return (
            <div>
                <Router>
                    {this.props.children}

                    <Switch>
                        <Route path='/films' component={Film}></Route>
                        {/* 动态路由 :id 中:号属于占位符*/}
                        <Route path='/film/:id' component={Detail}></Route>
                        <Route path='/cinemas' component={Cinema}></Route>
                        {/* <Route path='/center' component={Center}></Route> */}
                        {/* 路由拦截写法 */}
                        <Route path='/center' render={()=>{
                            return isAuth()? <Center /> : <Redirect to="/login"/>
                        }}></Route>

                        <Route path="/login" component={Login}></Route>
                        {/* 模糊匹配 */}
                        {/* <Redirect from='/' to='/3'></Redirect> */}
                        {/* 要精确匹配,加上exact即可 */}
                        <Redirect from='/' to='/films' exact></Redirect>
                        {/* 只要没有匹配的路径,就显示Not Found */}
                        <Route component={NotFound} />
                    </Switch>
                </Router>
            </div>
        )
    }
}
