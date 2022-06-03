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
                el: '吃饭'
            },
            {
                id: 1,
                el: '睡觉'
            },
            {
                id: 2,
                el: '打豆豆'
            }],
    }
    inputVal = React.createRef()

    render() {

        return (
            <div>
                <input type="text" ref={this.inputVal} />
                <button onClick={() => {
                    this.handelClick()
                }}>Add</button>
                <ul>
                    {
                        this.state.todoList.map((item) => <li key={item.id}>
                            {/* 富文本展示写法 适用于非常信任对方的代码片段场景  一般不推荐使用*/}
                            <span dangerouslySetInnerHTML={
                                {
                                    __html:item.el
                                }
                            }></span>
                         <button onClick={() => this.handelDelete(item.id)}>del</button></li>)
                    }
                </ul>
                {/* 条件渲染 1 &&运算 */}
                {/* {this.state.todoList.length === 0 && <div>暂无代办事项</div>} */}
                {/* 条件渲染 2 三目运算 */}
                {/* {this.state.todoList.length === 0 ? <div>暂无代办事项</div> :null} */}
                {/* 条件渲染 3 通过className样式控制 */}
                <div className={this.state.todoList.length === 0 ? '':'hidden'} >暂无代办事项</div>
            </div>
        )
    }

    handelClick = () => {
        let newTodo = this.inputVal.current.value
        if (newTodo === '') {
            alert("输入不能为空")
            return
        }
        if (JSON.stringify(this.state.todoList).toString().includes(newTodo)) {
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
        this.inputVal.current.value= ''
    }

    handelDelete (index){
        console.log(index)
        /* let newList = this.state.todoList.concat()
        newList.splice(index,1) */

        /* 写法2 */
        let newList = this.state.todoList.filter(item=>item.id !== index)
        this.setState({
            todoList:newList
        })
    }
}
