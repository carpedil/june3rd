import React, { Component } from 'react'

export default class App extends Component {
    /* 
        实现Todo List元素新增功能
    */
    state = {
        /* 定义一个初始List */
        todoList: [
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
    inputVal = React.createRef()

    render() {


        let todos = this.state.todoList.map((item) => <li key={item.id}>{item.el}</li>)

        return (
            <div>
                <input type="text" ref={this.inputVal} />
                <button onClick={() => {
                    this.handelClick()
                }}>Add</button>
                <ul>
                    {todos}
                </ul>
            </div>
        )
    }

    handelClick = () => {
        let newTodo = this.inputVal.current.value
        if(newTodo === ''){
            alert("输入不能为空")
            return
        }
        if(JSON.stringify(this.state.todoList).toString().includes(newTodo)){
            alert("请勿重复添加")
            return
        }
        /* 不推荐直接往原数组里面pust, 先深拷贝一份再push新的元素,最后再通过setState()方法更新状态 */
        let newList = this.state.todoList
        /* 组装新的todo对象 */
        newList.push({
            id: newList.length + 1, 
            el: newTodo
        })
        this.setState({
            todoList: newList
        })
    }
}
