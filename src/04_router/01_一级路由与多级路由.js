import { Component } from 'react'
import IndexRouter from './index/indexrouter'

export default class App extends Component {
    render() {
        return (
            <div>
                <p>App</p>
                <div>
                    {/* 其他内容 */}
                   <IndexRouter/>
                </div>
            </div>
        )
    }
}
