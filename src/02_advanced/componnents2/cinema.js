import React, { Component } from 'react'
/* npm i --save axios */
import axios from 'axios'
/* npm i --save better-scroll */
import BetterScroll from 'better-scroll'

export default class Cinema extends Component {

  constructor() {
    super()
    this.state = {
      cinemas: [],
      kw: ''
    }

    axios({
      url: 'https://m.maizuo.com/gateway?cityId=510100&ticketFlag=1&k=5261156',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1654244811799267643981825"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res => {
      console.log(res.data.data)
      this.setState({
        cinemas: res.data.data.cinemas,
      })

      new BetterScroll(".wrapper")
    })



  }
  render() {
    return (
      <div>
        <input value={this.state.kw} onChange={(evt)=>{
          this.setState({
            kw:evt.target.value
          })
        }} />
        <div className='wrapper' style={{
          height: '500px',
          overflow: 'hidden',
          background: 'yellow'
        }}>
          <div className='content' >
            {
              this.getCinemaList().map(
                item =>
                  <dl key={item.cinemaId}>
                    <dt>{item.name}</dt>
                    <dd>{item.address}</dd>
                  </dl>)
            }
          </div>
        </div>
      </div>
    )
  }

  getCinemaList = ()=>{
    return this.state.cinemas.filter(item => item.name.toUpperCase().includes(this.state.kw.toUpperCase()) || item.address.toUpperCase().includes(this.state.kw.toUpperCase()))
  }
}
