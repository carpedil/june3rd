import React, { Component } from 'react'
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper'
// import styles bundle
import 'swiper/css/bundle'

Swiper.use([Navigation, Pagination])

export default class MySwiper extends Component {
    componentDidMount() {
        new Swiper('.swiper', {
            pagination: {
                el: '.swiper-pagination'
            },
            loop:true
        })
    }

    render() {
        return (
            <div>
                <div className="swiper" style={{
                    background: 'gray',
                    height: '80%'
                }}>
                    <div className="swiper-wrapper">
                        {this.props.children}
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        )
    }
}
