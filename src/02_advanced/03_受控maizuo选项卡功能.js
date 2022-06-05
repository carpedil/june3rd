import React, { Component } from 'react'
import './css/01_maizuo.css'

import Movie from './componnents2/movie'
import Cinema from './componnents2/cinema'
import Center from './componnents2/center'
import TabBar from './componnents2/tabbar'
import NavBar from './componnents2/navbar'

export default class App extends Component {
    state ={
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
                <NavBar myevent={(index)=>{
                    console.log('navbar-info被点击,通知Tabbar切换到center组件',index)
                    this.setState({
                        current:index
                    })
                }}></NavBar>
                {
                    this.watchCurrent(this.state.current)
                }
                
                <TabBar myevent={(index)=>{
                     this.setState({
                        current:index
                    })
                }} current={this.state.current} list={this.state.list}></TabBar>
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
  
}
