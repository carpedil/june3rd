import React, { Component } from 'react'

export default class App extends Component {
    state = {
        count: 1
    }
    render() {
        return (
            <div>
                {this.state.count}
                <button onClick={this.handelClick1}>点击1</button>
                <button onClick={this.handelClick2}>点击2</button>
            </div>
        )
    }

    handelClick1 = () => {
        this.setState({
            count: this.state.count + 1
        },()=>{
            console.log('第一次调用',this.state.count)
        })

        this.setState({
            count: this.state.count + 1
        })
        console.log('第二次调用',this.state.count)

        this.setState({
            count: this.state.count + 1
        })
        console.log('第三次调用',this.state.count)

        /* 
            问题: 点击1按钮点击三次时, 状态会如何更新?
            Output:
            第一次点击:
             第一次调用 2
             第二次调用 1
             第三次调用 1
            第二次点击:
             第一次调用 2
             第二次调用 2
             第三次调用 2
            第三次点击:
             第一次调用 3
             第二次调用 3
             第三次调用 3
            结论: setState如果是处在同步逻辑中,异步更新状态, 更新真实dom
                 setState接受第二个参数, 第二个参数的意思是回调函数,再状态和dom更新完成之后,就会触发
        */
    }


    handelClick2 = () => {
        setTimeout(()=>{
            this.setState({
                count: this.state.count + 1
            })
             console.log('第一次调用',this.state.count)
    
            this.setState({
                count: this.state.count + 1
            })
            console.log('第二次调用',this.state.count)
    
            this.setState({
                count: this.state.count + 1
            })
            console.log('第三次调用',this.state.count)
    
            /* 
                问题: 点击2按钮点击三次时, 状态会如何更新?
                Output:
                第一次点击:
                 第一次调用 2
                 第二次调用 3
                 第三次调用 4
                第二次点击:
                 第一次调用 5
                 第二次调用 6
                 第三次调用 7
                第三次点击:
                 第一次调用 8
                 第二次调用 9
                 第三次调用 10
                结论: setState如果是处在异步逻辑中, 同步跟新状态,更新真实dom
            */
        },0)
    }
}
