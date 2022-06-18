import { Component } from 'react'
import './css/01_maizuo.css'

import Center from './componnents/center'
import Cinema from './componnents/cinema2'
import Movie from './componnents/movie'

export default class App extends Component {
    //    useMemo类似vue中的计算属性
    state = {
        list: [{
            id: 0,
            text: 'movie'
        },
        {
            id: 1,
            text: 'cinema'
        },
        {
            id: 2,
            text: 'center'
        }],
        current: 0
    }

    render() {
        return (
            <div>
                {
                    this.watchCurrent(this.state.current)
                }
                <ul>
                    {this.state.list.map(item =>
                        <li key={item.id}
                            className={this.state.current === item.id ? 'active' : ''}
                            onClick={() => this.handelClick(item.id)}>{item.text}
                        </li>)}
                </ul>
            </div>
        )
    }

    watchCurrent(index) {
        switch (index) {
            case 1:
                return <Cinema></Cinema>
            case 2:
                return <Center></Center>
            default:
                return <Movie></Movie>

        }
    }

    handelClick = (index) => {
        this.setState({
            current: index
        })
    }
}
