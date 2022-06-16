import React, { Component } from 'react'

export default class App extends Component {
    /* 定义一个变量a ,观察四个按钮点击时能否顺利访问a的值 */
    a = 100

    render() {
        return (
            <div>
                <input type="text" />
                <button onClick={() => {
                    console.log("Click1 Clicked","使用少量逻辑处理,如果处理逻辑过多, 不推荐这种写法",this.a)
                }}>Click1</button>

                <button onClick={this.handelClick2.bind(this)}>Click2</button>
                <button onClick={this.handelClick3}>Click3</button>
                <button onClick={()=>{
                    this.handelClick4()
                }}>Click4</button>
            </div>
        )
    }
    handelClick2() {
        console.log("Click2 clicked","存在this指向问题,需要使用.bind(this)函数修改this指向, 不推荐这种写法",this.a)
    }

    /* 箭头函数不关心谁调用, this指向永远与外部作用域保持一致 */
    handelClick3 = ()=>{ console.log("Click3 Clicked","不存在this指向问题",this.a)}
    handelClick4 = ()=>{ console.log("Click4 Clicked","推荐写法,适用于传参场景",this.a)}

}


/* 
改变this指向:
call: 改变this指向,自动执行
apply: 改变this指向, 自动执行函数
bind: 改变this指向, 不会自动执行,需要手动添加括号执行
*/

/* var Obj1 = {
    name:"obj1",
    getName(){
        console.log(this.name)
    }
}
var Obj2 = {
    name:"obj2",
    getName(){
        console.log(this.name)
    }
}


Obj1.getName.call(Obj2)
Obj1.getName.apply(Obj2)
Obj1.getName.bind(Obj2)() */
