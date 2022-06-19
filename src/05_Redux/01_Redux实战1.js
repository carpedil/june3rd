import axios from "axios"
import { useEffect, useState } from "react"
import { BrowserRouter as Router, NavLink, Redirect, Route, Switch, withRouter } from "react-router-dom"
import style from './css/redux.module.css'

// =================================== App ==============================================

export default function App() {
    return (
        <div>
            <div>
                <IndexRouter>
                    <TabBar />
                </IndexRouter>
            </div>
        </div>
    )
}

// =================================== IndexRouter ==============================================

function isAuth() {
    return localStorage.getItem('token')
}


function IndexRouter(props) {
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
                    <Route path='/cinemas' component={Cinema}></Route>
                    <Route path='/center' render={() => {
                        return isAuth() ? <CenterWithRouter /> : <Redirect to="/login" />
                    }}></Route>

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

// =================================== TabBar ==============================================


function TabBar() {
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

// =================================== Film ==============================================


function Film() {
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
// =================================== NowPlaying ==============================================

function NowPlaying() {
    const [list, setList] = useState([])

    useEffect(() => {
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=510100&pageNum=1&pageSize=10&type=1&k=9761773',
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16551278091379113998745601","bc":"510100"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(res => {
            setList(res.data.data.films)
        })

    }, [])

    return (
        <div>
            <ul>
                {
                    list.map(item =>
                        <FilmItenWithRouter key={item.filmId} {...item} />
                    )
                }
            </ul>
        </div>
    )
}
// =================================== FilmItem ==============================================


function FilmItem(props) {
    let { name, filmId } = props
    return (
        <li key={filmId} onClick={() => {
            props.history.push(`/film/${filmId}`)
        }}>
            {name}
        </li>
    )
}

const FilmItenWithRouter = withRouter(FilmItem)

// =================================== ComingSoon ==============================================

function ComingSoon() {
    const [list, setList] = useState([])


    useEffect(() => {
        axios.get('/ajax/comingList?ci=59&limit=10&movieIds=&token=&optimus_uuid=30FA15E0EF7911ECA8F2BFAB57C7314328702D038A1B4FA7BCEF96ED899AD23C&optimus_risk_level=71&optimus_code=10')
            .then(res => {
                console.log(res.data)
                if (res.data.coming) {
                    setList(res.data.coming)
                } else {
                    console.log("no data")
                }

            })
    }, [])

    return (
        <div>
            <ul>
                {
                    list.map(item =>
                        <li key={item.id}>{item.nm}</li>
                    )
                }
            </ul>
        </div>
    )
}

// =================================== Cinema ==============================================

function Cinema() {
    return <div> cinema</div>
}

// =================================== Center ==============================================

function Center(props) {
    return (
        <div>
            <div onClick={() => {
                props.history.push(`/orders`)
            }}>客户订单</div>
        </div>
    )
}

const CenterWithRouter = withRouter(Center)

// =================================== Detail ==============================================

function Detail(props) {
    return <div>Detail-{props.match.params.id}</div>
}

// =================================== Login ==============================================

function Login(props) {
    return (
        <div>
            <input type="text" />
            <button onClick={() => {
                localStorage.setItem('token', 'auth123')
                props.history.push(`/center`)
            }}>Login</button>
        </div>
    )
}

// =================================== NotFound ==============================================

function NotFound() {
    return <div>Not Found</div>
}