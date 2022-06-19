import { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div>
        <input type="text" />
        <button onClick={()=>{
            localStorage.setItem('token','auth123')
            this.props.history.push(`/center`)
        }}>Login</button>
      </div>
    )
  }
}
