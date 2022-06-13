import React, { Component } from 'react'

export default class App extends Component {
    state = {
        text: '1111'
    }

    render() {
        return (
            <div>
                {this.state.text}
                <button onClick={()=>{
                    this.setState({
                        text:'2222'
                    })
                }}>Click</button>
                <Child text={this.state.text}></Child>
            </div>
        )
    }
}


class Child extends Component {
    state ={
        title:'child'
    }
    // 只能用在子组件中 父组件修改属性时触发
    // 最先获得父组件传来的属性, 可以利用属性进行ajax或者逻辑处理
    // 可以把属性值转换为子组件的状态
    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log('.....',this.props.text,nextProps.text)
        this.setState({
            title: this.state.title +nextProps.text
        })
    }
    render() {
        return (
            <div>child - {this.state.title}</div>
        )
    }
}