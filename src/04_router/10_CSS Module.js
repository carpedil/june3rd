import { Component } from 'react'
import TabBar1 from './components/TabBar1'
import IndexRouter from './index/indexrouter5'

export default class App extends Component {
    render() {
        return (
            <div>
                <p>App</p>
                <div>
                    {/* 其他内容 */}
                    <IndexRouter>
                        <TabBar1/>
                    </IndexRouter>
                </div>
            </div>
        )
    }
}
