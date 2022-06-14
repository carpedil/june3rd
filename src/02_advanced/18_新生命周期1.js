import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
    state = {
        name: 'carpedil'
    }

    //  初始化/后续更新、父传子时处理逻辑
    static getDerivedStateFromProps(nextProps, nextState) {
        // console.log('ping',nextProps,nextState)
        return {
            name: nextState.name.substring(0, 1).toUpperCase() + nextState.name.substring(1)
        }
    }
    render() {
        return (
            <div>
                <h4>getDerivedStateFromProps</h4>
                <button onClick={() => {
                    this.setState({
                        name: 'cpx'
                    })
                }}>click</button>
                {this.state.name}
                <hr></hr>
                <div>
                    <p>案例-父传子</p>
                    <Example></Example>
                </div>
            </div>
        )
    }
}


class Example extends Component {
    state = {
        type: 0
    }
    render() {
        return (
            <div>
                <ul>
                    <h1>分类功能</h1>
                    <li onClick={() => {
                        this.setState({
                            type: 1
                        })
                    }}>正在热映</li>
                    <li onClick={() => {
                        this.setState({
                            type: 2
                        })
                    }}>即将上映</li>
                </ul>
                <FilmList type={this.state.type}></FilmList>
            </div>
        )
    }
}

class FilmList extends Component {
    state = {
        list: [],
        type: 0
    }

    //  取代componentWillReceiveProps ,需要配合componentDidUpdate()函数
    static getDerivedStateFromProps(nextProps, nextState) {
        console.log('pong', nextProps, nextState)
        return {
            type: nextProps.type
        }
    }

    componentDidUpdate(nextProps, nextState) {
        console.log(this.state.type, nextState.type)
        // 如果新旧type的值一样,则不发axios请求
        // this.state.type获取的是旧的状态
        // nextState.type获取的是新的状态
        if (this.state.type === nextState.type) {
            return
        }
        if (this.state.type === 1) {
            console.log('请求正在热映的电影')
            axios({
                url: 'https://m.maizuo.com/gateway?cityId=510100&pageNum=1&pageSize=10&type=1&k=9761773',
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16551278091379113998745601","bc":"510100"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res => {
                console.log(res.data.data.films)
                this.setState({
                    list: res.data.data.films
                })
            })
        } else if (this.state.type === 2) {
            console.log('请求即将上映的电影')
            axios({
                url: 'https://m.maizuo.com/gateway?cityId=510100&pageNum=1&pageSize=10&type=2&k=2245793',
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16551278091379113998745601","bc":"510100"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res => {
                console.log(res.data.data.films)
                this.setState({
                    list: res.data.data.films
                })
            })
        } else {
            return
        }
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.list.map(item => {
                            return <li key={item.filmId}>{item.name}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}