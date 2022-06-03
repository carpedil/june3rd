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
      cinemas_bk: [],
    }
    // get data by axios
    /* axios.get("url").then(res=>{}).catch(err=>console.log(err)) */

    /* axios.get('https://m.maizuo.com/gateway?cityId=510100&ticketFlag=1&k=5261156')
    .then(res=>{
      console.log(res.data)
    }) */
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
        cinemas_bk: res.data.data.cinemas
      })

      new BetterScroll(".wrapper")
    })



  }
  render() {
    return (
      <div>
        <input onInput={this.handelInput} />
        <div className='wrapper' style={{
          height: '500px',
          overflow: 'hidden',
          background: 'yellow'
        }}>
          <div className='content' >
            {
              this.state.cinemas.map(
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

  /* 当函数没有传递任何参数时,默认有一个event对象传递给函数 */
  handelInput = (event) => {
    let kw = event.target.value
    let newCinemas = this.state.cinemas_bk.filter(item => item.name.toUpperCase().includes(kw.toUpperCase()) || item.address.toUpperCase().includes(kw.toUpperCase()))

    this.setState({
      cinemas: newCinemas
    })
  }
}
