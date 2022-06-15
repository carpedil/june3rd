import React, { Component } from 'react'
import axios from 'axios'
import MySwiper from './swiper/swiper'
import MySwiperItem from './swiper/swiper-item'


export default class App extends Component {
    state = {
        list: []
    }

    componentDidMount() {
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=510100&pageNum=1&pageSize=10&type=1&k=9761773',
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16551278091379113998745601","bc":"510100"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(res => {
            this.setState({
                list: res.data.data.films
            })
        })
    }

    render() {
        return (
            <div>
                <MySwiper>
                    {
                        this.state.list.map(item =>
                            <MySwiperItem key={item.filmId}>
                                <div>
                                    <img src={item.poster} alt={item.name} style={{
                                        height: '280px',
                                        width: '100%'
                                    }} />
                                    <div>{item.name}</div>
                                </div>
                            </MySwiperItem>)
                    }
                </MySwiper>
            </div>
        )
    }
}
