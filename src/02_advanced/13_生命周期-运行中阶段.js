import React, { Component } from 'react'
import axios from 'axios'
import BetterScroll from 'better-scroll'
export default class App extends Component {
    state={
        name:'yah',
        list:[]
    }
    componentDidMount() { 
        axios.get('/data.json').then(res=>{
            this.setState({
                list:res.data.data.films
            })
        })

     }

    render() {
        // 主要用于渲染页面
        console.log('render() ....')
        return (
            <div>
                <h1>生命周期-运行中阶段</h1>
                <div id='name'>{this.state.name}</div>
                <button onClick={()=>{
                    this.setState({
                        name:'cpx'
                    })
                }}>click</button>
                <div id ='wrapper' style={{
                    height:'120px',
                    overflow:'hidden'
                }}>
                    <ul>
                        {
                            this.state.list.map(item=><li key={item.filmId}>{item.name}</li>)
                        }
                    </ul>
                </div>
            </div>
        )
    }
    
    UNSAFE_componentWillReceiveProps(){
        console.log('UNSAFE_componentWillReceiveProps...')
    }
    UNSAFE_componentWillUpdate(){
        console.log('UNSAFE_componentWillUpdate...',document.getElementById('name').innerHTML)
    }
    componentDidUpdate(prevProps, prevState) { 
        console.log('componentDidUpdate...',prevProps,prevState,document.getElementById('name').innerHTML)
        // 更新后, 想要获取dom节点、更新操作
        // 防止componentDidUpdate被多次调用
        if(prevState.list.length === 0){
            console.log('new better-scroll only once')
            new BetterScroll('#wrapper')

        }
    } 

    shouldComponentUpdate(nextProps,nextState){
        console.log('shouldComponentUpdate....')
        // 返回false, 组件就不会更新 , 阻止更新, 防止无效的dom对比,提升性能
        // if (老状态 !== 新状态){
        //     return true
        // } else{
        //     return false
        // }

        // if (this.state.name !== nextState.name){
        //     return true
        // }
        // return false

        // 如果存在多个状态对比, 可以将新旧状态对象转成字符串对比
        if (JSON.stringify(this.state) !== JSON.stringify(nextState)){
            return true
        }
         return false
    }
}
