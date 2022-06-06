import React, { Component } from 'react'
import axios from 'axios'
import './css/02_films.css'

// 1. 创建Contex
const GlobalContext = React.createContext()

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            filmList: [],
            info: ''
        }

        axios.get('/data.json').then(res => {
            this.setState({
                filmList: res.data.data.films,
            })
        })
    }
    render() {
        return (
            // 2. GlobalContex.Provider 中的value对象的属性和方法,在所有Consumer组件中都可以访问和调用, 特喵的value还必须写的一毛一样????~!!
            <GlobalContext.Provider  value={{
                info: this.state.info,
                changeInfo: (value) => {
                    this.setState({
                        info: value
                    })
                }
            }}>
                <div>
                    <h1>Context模式</h1>
                    {
                        this.state.filmList.map(item => {
                            return <FilmItem key={item.filmId} {...item} ></FilmItem>
                        })
                    }
                    <FilmDetail ></FilmDetail>
                </div>
            </GlobalContext.Provider>
        )
    }
}


class FilmItem extends Component {
    render() {
        let { name, poster, grade, category, synopsis } = this.props
        return (
            <GlobalContext.Consumer>
                {/* 固定写法 */}
                {
                    (value) => {
                        return <div className='filmItem' onClick={() => {
                            // console.log(synopsis)
                            value.changeInfo(synopsis)
                        }}>
                            <img src={poster} alt={name} ></img>
                            <h3>{name}</h3>
                            <h3>观众评分:{grade}</h3>
                            <h3>类别:{category}</h3>
                        </div>
                    }
                }
            </GlobalContext.Consumer>
        )
    }
}


class FilmDetail extends Component {
    render() {
        return (
            <GlobalContext.Consumer>
                {
                    (value) => {
                        return <div className='filmdetail'>{value.info}</div>
                    }
                }
            </GlobalContext.Consumer>
        )
    }
}




