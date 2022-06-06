import React, { Component } from 'react'

export default class App extends Component {
    username = React.createRef()
    password = React.createRef()
    
    render() {
        return (
            <div>
                <h1>Login</h1>
                <Filed label='用户名' type='text' ref={this.username} ></Filed>
                <Filed label='密码' type='password' ref={this.password}></Filed>
                <input type="button" value='Login' onClick={() => {
                    console.log(this.username.current.state.value,this.password.current.state.value)
                }} />
                <input type="button" value='Reset' onClick={()=>{
                    this.username.current.setValue('')
                    this.password.current.setValue('')
                }} />
            </div>
        )
    }
}


class Filed extends Component {
    state = {
        value:''
    }
    clear(){
        this.setState({
            value:''
        })
    }
    setValue(value){
        this.setState({
            value:value
        })
    }
    render() {
        return (
            <div style={{ background: 'yellow' }}>
                <label >{this.props.label}</label>
                <input type={this.props.type} value={this.state.value} onChange={(evt)=>{
                    this.setState({
                        value:evt.target.value
                    })
                }}/>
            </div>
        )
    }
}