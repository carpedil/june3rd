import axios from 'axios'
import { Component, useEffect, useState } from 'react'

export default class App extends Component {
    state = {
        type: 1
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
                {/* <FilmList type={this.state.type}></FilmList> */}
                <FilmList2 type={this.state.type}></FilmList2>
            </div>
        )
    }
}

// class FilmList extends Component {
//     state = {
//         list: []
//     }

//     UNSAFE_componentWillReceiveProps(nextProps) {
//         // nextProps.type获取的是最新的属性
//         if (nextProps.type === 1) {
//             console.log('请求正在热映的电影')
//             axios({
//                 url: 'https://m.maizuo.com/gateway?cityId=510100&pageNum=1&pageSize=10&type=1&k=9761773',
//                 headers: {
//                     'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16551278091379113998745601","bc":"510100"}',
//                     'X-Host': 'mall.film-ticket.film.list'
//                 }
//             }).then(res => {
//                 console.log(res.data.data.films)
//                 this.setState({
//                     list: res.data.data.films
//                 })
//             })
//         } else if (nextProps.type === 2) {
//             console.log('请求即将上映的电影')
//             axios({
//                 url: 'https://m.maizuo.com/gateway?cityId=510100&pageNum=1&pageSize=10&type=2&k=2245793',
//                 headers: {
//                     'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16551278091379113998745601","bc":"510100"}',
//                     'X-Host': 'mall.film-ticket.film.list'
//                 }
//             }).then(res => {
//                 console.log(res.data.data.films)
//                 this.setState({
//                     list: res.data.data.films
//                 })
//             })
//         } else {
//             return
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <ul>
//                     {
//                         this.state.list.map(item => {
//                             return <li key={item.filmId}>{item.name}</li>
//                         })
//                     }
//                 </ul>
//             </div>
//         )
//     }
// }

function FilmList2(props) {
    const [list, setlist] = useState([])

    useEffect(() => {
        if (props.type === 1) {
            console.log('请求正在热映的电影')
            axios({
                url: 'https://m.maizuo.com/gateway?cityId=510100&pageNum=1&pageSize=10&type=1&k=9761773',
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16551278091379113998745601","bc":"510100"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res => {
                setlist(res.data.data.films)
            })
        } else if (props.type === 2) {
            console.log('请求即将上映的电影')
            axios({
                url: 'https://m.maizuo.com/gateway?cityId=510100&pageNum=1&pageSize=10&type=2&k=2245793',
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16551278091379113998745601","bc":"510100"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res => {
                setlist(res.data.data.films)
            })
        } else {
            return
        }

    }, [props.type]) // 传[]数组

    return (
        <div>
            <ul>
                {
                    list.map(item => {
                        return <li key={item.filmId}>{item.name}</li>
                    })
                }
            </ul>
        </div>
    )
}
