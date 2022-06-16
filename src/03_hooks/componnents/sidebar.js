import React from 'react'

/* 函数式组件通过行参接收组件属性 */
export default function SideBar(props) {
    /* 解构时,需要按照传入时的参数名进行解构 */
    let { bg,position } = props
    let obj1 ={
        background:bg,
        width: '400px',
        position: "fixed",
    }
    let obj2 = {
        right:0
    }
    let obj3 = {
        left: 0
    }

    let styleObj = position === "left" ? {...obj1,...obj2}: {...obj1,...obj3}
    return (
        <div style={styleObj}>
            <h6>函数式组件</h6>
            <ul>
                <li>11</li>
                <li>22</li>
                <li>33</li>
            </ul>
        </div>
    )
}
