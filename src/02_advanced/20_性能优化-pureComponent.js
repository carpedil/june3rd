import React, { PureComponent } from 'react'

// 如果state或者props更新变化频繁,则不推荐使用PureComponent组件,因为shadowEqual也需要花费时间
export default class App extends PureComponent {
    state={
        name:'yah',
    }
    
    render() {
        // 主要用于渲染页面
        console.log('render() ....')
        return (
            <div>
                <h1>性能优化-PureComponent</h1>
                <div id='name'>{this.state.name}</div>
                <button onClick={()=>{
                    this.setState({
                        name:'cpx'
                    })
                }}>click</button>
                
            </div>
        )
    }
    
   


    // shouldComponentUpdate(nextProps,nextState){
    //     console.log('shouldComponentUpdate....')
    //     // 返回false, 组件就不会更新 , 阻止更新, 防止无效的dom对比,提升性能
    //     // if (老状态 !== 新状态){
    //     //     return true
    //     // } else{
    //     //     return false
    //     // }

    //     // if (this.state.name !== nextState.name){
    //     //     return true
    //     // }
    //     // return false

    //     // 如果存在多个状态对比, 可以将新旧状态对象转成字符串对比
    //     if (JSON.stringify(this.state) !== JSON.stringify(nextState)){
    //         return true
    //     }
    //      return false
    // }
}
