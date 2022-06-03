import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return (
            <div>
                <input type="text" />
                <button onClick={() => {
                    console.log("Click1 Clicked","使用少量逻辑处理,如果处理逻辑过多, 不推荐这种写法")
                }}>Click1</button>

                <button onClick={this.handelClick2}>Click2</button>
                <button onClick={this.handelClick3}>Click3</button>
                <button onClick={()=>{
                    this.handelClick4()
                }}>Click4</button>
            </div>
        )
    }
    handelClick2() {
        console.log("Click2 clicked","存在this指向问题")
    }

    handelClick3 = ()=>{ console.log("Click3 Clicked","存在this指向问题")}
    handelClick4 = ()=>{ console.log("Click4 Clicked","推荐写法")}

}
