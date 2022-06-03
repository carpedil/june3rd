import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
          <h1>App</h1>
          <NavBar></NavBar>
          <Swipper></Swipper>
          <TabBar></TabBar>
      </div>
    )
  }
}



class NavBar extends Component {
  render() {
    return (
      <div>NavBar</div>
    )
  }
}


class Swipper extends Component {
    render() {
      return (
        <div>Swipper</div>
      )
    }
  }

  
class TabBar extends Component {
    render() {
      return (
        <div>TabBar</div>
      )
    }
  }
  