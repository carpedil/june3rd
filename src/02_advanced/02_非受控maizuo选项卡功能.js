import React, { Component } from 'react'
import './css/01_maizuo.css'

import Movie from './componnents/movie'
import Cinema from './componnents/cinema'
import Center from './componnents/center'
import TabBar from './componnents/tabbar'
import NavBar from './componnents/navbar'

export default class App extends Component {
    state ={
        current: 0
    }
    

    render() {
        return (
            <div>
                <NavBar onEvent={()=>{
                    console.log('navbar-info被点击,通知Tabbar切换到center组件')
                    this.setState({
                        current:2
                    })
                }}></NavBar>
                {
                    this.watchCurrent(this.state.current)
                }
                
                <TabBar current={this.handelCurrent} defaultValue={this.state.current}></TabBar>
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

    handelCurrent =(index)=>{
        this.setState({
            current:index
        })
    }
  
}
