import React, { Component } from 'react'
/* npm i --save axios */
import axios from 'axios'
export default class Cinema extends Component {

  constructor() {
    super()
    this.state = {
      cinemas: []
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
        cinemas: res.data.data.cinemas
      })
    })



  }
  render() {
    return (
      <div>
        {
          this.state.cinemas.map(
            item =>
              <dl key={item.cinemaId}>
                <dt>{item.name}</dt>
                <dd>{item.address}</dd>
              </dl>)
        }
      </div>
    )
  }
}
