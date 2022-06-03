import React, { Component } from 'react'

export default class App extends Component {
    /* 
        列表渲染时,为了列表的复用和重排,设置key值,提高性能, 理想key应该设置为对象自身唯一标识字段,如id, uid等等 
        如果不涉及到列表的增加删除,重排等操作, 设置为列表的索引也可以
    */
    state = {
        list1: ['吃饭', '睡觉', '打豆豆'],
        list2: [
            {
                id: 1,
                el: '吃饭'
            },
            {
                id: 2,
                el: '睡觉'
            },
            {
                id: 3,
                el: '打豆豆'
            }],
    }
    render() {

        let data = this.state.list2.map((item) =><li key={item.id}>{item.el}</li>)

        return (
            <div>
                <ul>
                    {/* 通过list.map()方法进行遍历即可 , index为列表索引*/}
                    {this.state.list1.map((item,index) => <li key={index}>{item}</li>)}
                </ul>

                <ul>
                    {data}
                </ul>
            </div>
        )
    }
}
