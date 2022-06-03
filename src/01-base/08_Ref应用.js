import React, { Component } from 'react'

export default class App extends Component {
    /* 方案2 通过React.createRef()返回一个Ref对象 */
    myRef = React.createRef()
    render() {
        return (
            <div>
                <div>
                <p>方案1 在React.Strict模式下,存在潜在风险, this.refs已弃用</p>
                <input type="text" ref="mytext"/>
                <button onClick={() => {
                    console.log("Click1 Clicked",this.refs.mytext.value)
                }}>Click1</button>

                <button onClick={this.handelClick2.bind(this)}>Click2</button>
                <button onClick={this.handelClick3}>Click3</button>
                <button onClick={()=>{
                    this.handelClick4()
                }}>Click4</button>
                </div>
{/* =========================================================================================== */}
                <div>
                <p>方案2 推荐方案</p>
                <input type="text" ref={this.myRef}/>
                <button onClick={() => {
                    console.log("Click5 Clicked",this.myRef.current.value)
                }}>Click5</button>

                <button onClick={this.handelClick6.bind(this)}>Click6</button>
                <button onClick={this.handelClick7}>Click7</button>
                <button onClick={()=>{
                    this.handelClick8()
                }}>Click8</button>
                </div>
            </div>
        )
    }
    handelClick2() {
        console.log("Click2 clicked",this.refs.mytext.value)
    }

    /* 箭头函数不关心谁调用, this指向永远与外部作用域保持一致 */
    handelClick3 = ()=>{ console.log("Click3 Clicked",this.refs.mytext.value)}
    handelClick4 = ()=>{ console.log("Click4 Clicked",this.refs.mytext.value)}


    handelClick6() {
        console.log("Click6 clicked",this.myRef.current.value)
    }

    /* 箭头函数不关心谁调用, this指向永远与外部作用域保持一致 */
    handelClick7 = ()=>{ console.log("Click7 Clicked",this.myRef.current.value)}
    handelClick8 = ()=>{ console.log("Click8 Clicked",this.myRef.current.value)}
}


