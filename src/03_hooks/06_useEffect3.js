import { Component, useEffect } from 'react'

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

function Child(){


    useEffect(() => {
        window.onresize=()=>{
            console.log('resize')
        }

       var timer = setInterval(()=>{
            console.log('interval')
        },1000)
    
      return () => {
        console.log('组件被销毁')
         // 清除事件监听
         window.onresize = null
         // 清空timer定时器
         clearInterval(timer)
      }
    }, [])
    
    return <div>child2</div>

}