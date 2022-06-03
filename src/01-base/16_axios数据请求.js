import React, { Component } from 'react'
import './css/02_maizuo.css'

import Movie from './componnents/movie'
import Cinema from './componnents/cinema'
import Center from './componnents/center'

export default class App extends Component {
    /* 
        实现根据当前鼠标点击,展示切换至对应的选项卡页面
        根据axios发送请求,获取影院数据
    */
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
