import React, { Component } from 'react'
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper'
// import styles bundle
import 'swiper/css/bundle'

Swiper.use([Navigation, Pagination])

export default class MySwiperItem extends Component {

    render() {
        return (
            <div className='swiper-slide'>
               {this.props.children}
            </div>
        )
    }
}
