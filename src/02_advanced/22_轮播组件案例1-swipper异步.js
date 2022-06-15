import React, { Component } from 'react'
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper'
// import styles bundle
import 'swiper/css/bundle'

Swiper.use([Navigation, Pagination])

export default class App extends Component {
    state = {
        list: []
    }

    componentDidMount() {

        // 在异步的逻辑中, New操作一般放在setState之后,或者componentDidUpdate函数中进行最好
        setTimeout(()=>{
            this.setState({
                list:['aaa','bbb','ccc']
            })
            // 方式1
            new Swiper('.swiper', {
                pagination: {
                    el: '.swiper-pagination'
                }
            })
        },3000)
    }
    // 方式2
    // componentDidUpdate(){
    //     new Swiper('.swiper', {
    //         pagination: {
    //             el: '.swiper-pagination'
    //         }
    //     })
    // }

    render() {
        return (
            <div>
                <p>轮播组件案例1</p>
                <a href="https://www.swiper.com.cn/usage/index.html">https://www.swiper.com.cn/usage/index.html</a>
                <div className="swiper" style={{
                    background: 'gray',
                    height: '200px'
                }}>
                    <div className="swiper-wrapper">
                        {
                            this.state.list.map(item =>
                                <div className="swiper-slide" key={item} style={{ height: '100px', fontSize: '44px' }}>Slide 1-{item}</div>
                            )
                        }
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        )
    }
}
