import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom"
import Center from "../../views/center/Center"
import Cinema from "../../views/cinemas/Cinema"
import City from "../../views/cty/City"
import Detail from "../../views/detail/Detail"
import Film from "../../views/films/Film"
import Login from "../../views/login/Login"
import NotFound from "../../views/NotFound/NotFound"
import Search from "../../views/search/Search"


export default function IndexRouter(props) {
    return (
        <div>
            <Router>
                {/* 预留插槽 */}
                {props.children}
                {/* 路由配置 */}
                <Switch>
                    <Route path='/films' component={Film}></Route>
                    {/* 动态路由 :id 中:号属于占位符*/}
                    <Route path='/film/:id' component={Detail}></Route>
                    <Route path='/cinemas' component={Cinema} exact></Route>
                    <Route path='/cinemas/search' component={Search} exact></Route>
                    <Route path='/center' render={() => {
                        return isAuth() ? <Center /> : <Redirect to="/login" />
                    }}></Route>
                    <Route path="/city" component={City}></Route>

                    <Route path="/login" component={Login}></Route>
                    {/* 要精确匹配,加上exact即可 */}
                    <Redirect from='/' to='/films' exact></Redirect>
                    {/* 只要没有匹配的路径,就显示Not Found */}
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </div>
    )
}


function isAuth() {
    return localStorage.getItem('token')
}
