import React, { Component } from 'react'

export default class App extends Component {
    /*   
        state = {
            isLiked: true
        } 
    */
    /* 写法2 */
    constructor(){
        super()
        this.state = {
            isLiked: true,
            owner:"cpx"
        }
    }
    render() {
        return (
            <div>
                <h1>四十二章经-{this.state.owner}</h1>
                <button onClick={() => {
                    this.setState({
                        isLiked: !this.state.isLiked,
                        owner: !this.state.isLiked ?'cpx':'carpedil'
                    })

                    if (this.state.isLiked) {
                        console.log("已收藏")
                    } else {
                        console.log("已取消收藏")
                    }
                }
                }>{this.state.isLiked ? '收藏' : '取消收藏'}</button>
            </div>
        )
    }
}
