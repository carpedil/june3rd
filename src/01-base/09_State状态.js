import React, { Component } from 'react'

export default class App extends Component {
    state = {
        isLiked: true
    }
    render() {
        return (
            <div>
                <h1>四十二章经</h1>
                <button onClick={() => {
                    this.setState({
                        isLiked: !this.state.isLiked
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
