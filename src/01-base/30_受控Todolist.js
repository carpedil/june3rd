import React, { Component } from 'react'
import './css/01_index.css'

export default class App extends Component {
    /* 
        实现Todo List元素删除功能
    */
    state = {
        /* 定义一个初始List */
        todoList: [
            {
                id: 0,
                el: '吃饭',
                isChecked: false
            },
            {
                id: 1,
                el: '睡觉',
                isChecked: false
            },
            {
                id: 2,
                el: '打豆豆',
                isChecked: false
            }],
        inputTxt: ''
    }
    /* inputVal = React.createRef() */

    render() {

        return (
            <div>
                <input type="text" value={this.state.inputTxt} onChange={(evt) => {
                    this.setState({
                        inputTxt: evt.target.value
                    })
                }} />
                <button onClick={() => {
                    this.handelClick()
                }}>Add</button>
                <ul>
                    {
                        this.state.todoList.map((item,index) => <li key={item.id}>
                            <input type="checkbox" checked={item.isChecked} onChange={() => {
                                this.handelChecked(index)
                            }} />
                            {/* 富文本展示写法 适用于非常信任对方的代码片段场景  一般不推荐使用*/}
                            <span dangerouslySetInnerHTML={
                                {
                                    __html: item.el
                                }
                            } style={{ textDecoration: item.isChecked ? 'line-through' : '' }}></span>
                            <button onClick={() => this.handelDelete(index)}>del</button></li>)
                    }
                </ul>
                {/* 条件渲染 1 &&运算 */}
                {/* {this.state.todoList.length === 0 && <div>暂无代办事项</div>} */}
                {/* 条件渲染 2 三目运算 */}
                {/* {this.state.todoList.length === 0 ? <div>暂无代办事项</div> :null} */}
                {/* 条件渲染 3 通过className样式控制 */}
                <div className={this.state.todoList.length === 0 ? '' : 'hidden'} >暂无代办事项</div>
            </div>
        )
    }

    handelClick = () => {
        let newTodo = this.state.inputTxt
        if (newTodo === '') {
            alert("输入不能为空")
            return
        }
        if (JSON.stringify(this.state.todoList).toString().includes(newTodo)) {
            alert("请勿重复添加")
            return
        }
        /* 不推荐直接往原数组里面pust, 先深拷贝一份再push新的元素,最后再通过setState()方法更新状态 */
        let newList = [...this.state.todoList]
        /* 组装新的todo对象 */
        newList.push({
            id: Math.floor(Math.random()*(100-1)+1),
            el: newTodo,
            isChecked: false
        })
        this.setState({
            todoList: newList
        })
        this.setState({
            inputTxt: ''
        })
    }

    handelDelete(index) {
        console.log(index)
        /* 被勾选的item才能删除 */
        let isChecked = this.state.todoList[index].isChecked
        if (!isChecked) {
            alert('该项代办事项还未完成,不可删除')
            return
        }
        /* let newList = this.state.todoList.concat()
        newList.splice(index,1) */

        /* 写法2 */
        let removeObj = this.state.todoList[index]
        let newList = this.state.todoList.filter(item => item !== removeObj)
        this.setState({
            todoList: newList
        })

    }

    handelChecked = (index) => {
        console.log(this.state.todoList)
        let newList = [...this.state.todoList]
        console.log(newList[index])

        newList[index].isChecked = !newList[index].isChecked
        this.setState({
            todoList: newList
        })
    }
}
