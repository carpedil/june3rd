import React, { Component } from 'react'

export default class App extends Component {
    username = React.createRef()
    render() {
        return (
            <div>
                <h1>Login</h1>
                <input type="text" ref={this.username} defaultValue="cpx"/>
                <button onClick={()=>{
                    console.log(this.username.current.value)
                }}>Login</button>
                <button onClick={()=>{
                    this.username.current.value = ''
                }}>Reset</button>
            </div>
        )
    }
}
