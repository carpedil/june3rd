import React, { Component } from 'react'
import axios from 'axios'
import './css/02_films.css'

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            filmList: []
        }

        axios.get('/data.json').then(res => {
            console.log(res.data.data.films)
            this.setState({
                filmList: res.data.data.films,
                info:''
            })
        })
    }
    render() {
        return (
            <div>
                <h1>中间人模式</h1>
                {
                    this.state.filmList.map(item => {
                        return <FilmItem key={item.filmId} {...item} onEvent={(value)=>{
                            this.setState({
                                info:value
                            })
                        }}></FilmItem>
                    })
                }
                <FilmDetail info={this.state.info}></FilmDetail>
            </div>
        )
    }
}


class FilmItem extends Component {
    render() {
        let { name, poster,grade ,category,synopsis} = this.props
        return (
            <div className='filmItem' onClick={()=>{
                this.props.onEvent(synopsis)
            }}>
                <img src={poster} alt={name} ></img>
                <h3>{name}</h3>
                <h3>观众评分:{grade}</h3>
                <h3>类别:{category}</h3>
            </div>)
    }
}


class FilmDetail extends Component{
    render(){
        return (
            <div className='filmdetail'>{this.props.info}</div>
        )
    }
}