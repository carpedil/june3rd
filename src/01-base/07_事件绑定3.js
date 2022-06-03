import React, { Component } from 'react'

export default class App extends Component {
    /* 定义一个变量a ,观察四个按钮点击时能否顺利访问a的值  */
    a = 100

    render() {
        return (
            <div>
                <input type="text" />
                <button onClick={(evt) => {
                    console.log("Click1 Clicked","使用少量逻辑处理,如果处理逻辑过多, 不推荐这种写法",this.a,evt.target)
                }}>Click1</button>

                <button onClick={this.handelClick2.bind(this)}>Click2</button>
                <button onClick={this.handelClick3}>Click3</button>
                <button onClick={(evt)=>{
                    this.handelClick4(evt)
                }}>Click4</button>
            </div>
        )
    }
    handelClick2(evt) {
        console.log("Click2 clicked","存在this指向问题,需要使用.bind(this)函数修改this指向, 不推荐这种写法",this.a,evt.target)
    }

    /* 箭头函数不关心谁调用, this指向永远与外部作用域保持一致 */
    handelClick3 = (evt)=>{ console.log("Click3 Clicked","存在this指向问题",this.a,evt.target)}
    handelClick4 = (evt)=>{ console.log("Click4 Clicked","推荐写法,适用于传参场景",this.a,evt.target)}

}


/* 
   面试1: React并不会真正的绑定事件到每一个具体的元素上面,而是采用事件代理的模式,好处:节省内存
*/
