import React, { Component } from 'react'

export default class App extends Component {
    state={
        isChange:true
    }
    render() {
        return (
            <div>
                <button onClick={()=>{
                    this.setState({
                        isChange:!this.state.isChange
                    })
                }}>click</button>
                {/* {this.state.isChange ? <Child/>:''} */}
                {this.state.isChange && <Child/>}
            </div>
        )
    }
}



class Child extends Component {
    componentDidMount() { 
        window.onresize=()=>{
            console.log('resize')
        }
      this.timer =  setInterval(()=>{
            console.log('interval')
        },1000)
     }
    render() {
        return (
            <div>child</div>
        )
    }
    componentWillUnmount(){
        // 用于组件销毁阶段,可以用来结束事件监听,清除定时器等
        // 清除事件监听
        window.onresize = null
        // 清空timer定时器
        clearInterval(this.timer)
    }
}
