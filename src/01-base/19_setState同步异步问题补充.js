import React, { Component } from 'react'
/* npm i --save better-scroll */
import BetterScroll from 'better-scroll'

export default class App extends Component {
    /* 
        利用BetterScroll组件,实现列表平滑滚动效果
    */

    state = {
        list: []
    }
    render() {
        return (
            <div>
                <button onClick={() => this.getData()}>Click</button>
                <div className='wrapper' style={{
                    height: '200px',
                    overflow: 'hidden',
                    background: 'yellow'
                }}>
                    <ul className='content' >
                        {this.state.list.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                </div>
            </div>
        )
    }

    getData = () => {
        var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

        /* 方法1 同步逻辑 */
        /*         this.setState({
                    list: list
                }, () => {
                    console.log(this.state.list)
                    console.log(document.querySelectorAll('li'))
                    new BetterScroll(".wrapper")
                })
         */


        /* 方法2 异步逻辑 */
        setTimeout(() => {
            this.setState({
                list: list
            })

            console.log(this.state.list)
            console.log(document.querySelectorAll('li'))
            new BetterScroll(".wrapper")
        }, 0)

    }
}
