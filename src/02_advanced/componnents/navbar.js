import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    return (
      <div style={{width:'100%',background:'#63BBED',textAlign:'center',overflow:'hidden'}}>
          <button style={{float:'left'}}>Back</button>
          <b>卖座电影</b>
          <button style={{float:'right'}} onClick={()=>{
              this.props.onEvent()
          }}>Info</button>
      </div>
    )
  }
}
