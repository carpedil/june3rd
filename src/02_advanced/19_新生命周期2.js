import React, { Component } from 'react'

export default class App extends Component {
    state = {
        text: '111'
    }
    render() {
        console.log('render')
        return (
            <div>
                <p>getSnapshotBeforeUpdate-代替componentWillUpdate方案</p>
                <button onClick={() => {
                    this.setState({
                        text: '222'
                    })
                }}>click</button>
                {this.state.text}
                <hr />
                <p>案例-邮箱</p>
                <Email></Email>
            </div>
        )
    }

    // 与componentDidUpdate()函数搭配使用
    getSnapshotBeforeUpdate() {
        console.log('getSnapshotBeforeUpdate')
        return 100
    }

    componentDidUpdate(prevProps, prevState, value) {
        console.log('componentDidUpdate', value)
    }

}

class Email extends Component {
    state = {
        list: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
    }
    ref = React.createRef()

    render() {
        return (
            <div>
                <h5>mail list:</h5>
                <div ref={this.ref} style={{
                    height: '100px',
                    overflow: 'auto',
                    margin:0,
                    padding:0
                }}>
                    <ul style={{
                        margin:0,
                        padding:0
                    }}>
                        {
                            this.state.list.map(item => <li key={item} style={{ height: '50px', background: 'yellow',margin:0,padding:0 }}>{item}</li>)
                        }
                    </ul>
                </div>
                <button onClick={()=>{
                    this.setState({
                        list:[...[20,19,18,17,16,15,14,13,12,11],...this.state.list]
                    })
                }}>refresh</button>
            </div>
        )
    }

    getSnapshotBeforeUpdate() {
        console.log(this.ref.current.scrollHeight)
        return this.ref.current.scrollHeight
    }

    componentDidUpdate(prevProps,prevState,value){
        console.log(this.ref.current.scrollHeight)
        this.ref.current.scrollTop +=this.ref.current.scrollHeight-value
    }
}
