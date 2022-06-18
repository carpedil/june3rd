import { Component } from 'react'
import { HashRouter, Route } from 'react-router-dom'

import Center from '../views/center'
import Cinema from '../views/cinema'
import Film from '../views/film'


// HashRouter 会在浏览器地址栏后面跟一个#号

export default class IndexRouter extends Component {
    render() {
        return (
            <div>
                 <HashRouter>
                        <Route path='/1'><Film/></Route>
                        <Route path='/2'><Cinema/></Route>
                        <Route path='/3'><Center/></Route>
                    </HashRouter>
            </div>
        )
    }
}
