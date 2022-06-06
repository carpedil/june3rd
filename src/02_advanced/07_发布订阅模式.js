import React, { Component } from 'react'
import axios from 'axios'
import './css/02_films.css'

// 调度中心
var bus = {
    list : [],
    // 订阅
    subscribe(callback){
        this.list.push(callback)
    },

    // 发布
    publish(text){
        // 遍历所有列表,并将回调函数调用
        this.list.forEach(callback =>{
            callback && callback(text)
        })
    }
}

/* // 订阅者1
bus.subscribe((val)=>{
    console.log('tom',val)
})
// 订阅者2
bus.subscribe((val)=>{
    console.log('jerry',val)
})

// 发布者
setTimeout(()=>{
    bus.publish('男人看了沉默,女人看了流泪')
},5000) */

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            filmList: []
        }

        axios.get('/data.json').then(res => {
            this.setState({
                filmList: res.data.data.films,
            })
        })
    }
    render() {
        return (
            <div>
                <h1>发布订阅模式</h1>
                {
                    this.state.filmList.map(item => {
                        return <FilmItem key={item.filmId} {...item}></FilmItem>
                    })
                }
                <FilmDetail ></FilmDetail>
            </div>
        )
    }
}


class FilmItem extends Component {
    render() {
        let { name, poster,grade ,category,synopsis} = this.props
        return (
            <div className='filmItem' onClick={()=>{
                /* console.log('我发布了',synopsis) */
                bus.publish(synopsis)
            }}>
                <img src={poster} alt={name} ></img>
                <h3>{name}</h3>
                <h3>观众评分:{grade}</h3>
                <h3>类别:{category}</h3>
            </div>)
    }
}


class FilmDetail extends Component{
    constructor(){
        super()
        this.state={
            info:''
        }
        bus.subscribe((info)=>{
            this.setState({
                info:info
            })
        })
    }
    render(){
        return (
            <div className='filmdetail'>{this.state.info}</div>
        )
    }
}




