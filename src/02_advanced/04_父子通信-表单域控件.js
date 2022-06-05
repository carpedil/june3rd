import React, { Component } from 'react'

export default class App extends Component {
    state = {
        username: localStorage.getItem('username'),
        password: localStorage.getItem('password')
    }
    render() {
        return (
            <div>
                <h1>Login</h1>
                <Filed label='用户名' type='text' onChangeEvt={(val) => {
                    this.setState({
                        username: val
                    })
                }} value={this.state.username}></Filed>
                <Filed label='密码' type='password' onChangeEvt={(val) => {
                    this.setState({
                        password: val
                    })
                }}></Filed>
                <input type="button" value='Login' onClick={() => {
                    console.log(this.state)
                }} />
                <input type="button" value='Reset' onClick={() => {
                    this.setState({
                        username: '',
                        password: ''
                    })
                }} />
            </div>
        )
    }
}


class Filed extends Component {
    render() {
        return (
            <div style={{ background: 'yellow' }}>
                <label >{this.props.label}</label>
                <input type={this.props.type}
                    onChange={(evt) => this.props.onChangeEvt(evt.target.value)}
                    value={this.props.value} />
            </div>
        )
    }
}