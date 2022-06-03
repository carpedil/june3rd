import React, { Component } from 'react'
import './css/01_index.css' /* 引入css模块, webpack支持 */

export default class App extends Component {
    render() {
        let myname = "cpx"
        let obj = {
            /* 复合属性,需要使用驼峰命名, 如font-size,需要写成fontSize */
            fontSize: 24,
            backgroundColor: "gray"
        }
        return (
            <div>
                <div>
                    {myname} <br />
                    {20 + 30} <br />
                    {20 > 30 ? 'AAA' : 'BBB'}</div>
                {/* 行内样式, 方便复用, 官方推荐写法 */}
                <div style={{ background: "red" }}>11111</div>
                <div style={obj}>22222</div>
                {/* 外部引入css文件, 类选择器class需要写成className */}                
                <div className='active'>22222</div>
                {/* label标签 for属性同样需要改写成htmlFor替换 */}  
                <label htmlFor="username">用户名:</label>
                <input type="text" id="username"/>
            </div>
        )
    }
}
