import { useEffect, useMemo, useState } from 'react'
/* npm i --save axios */
import axios from 'axios'
/* npm i --save better-scroll */
import BetterScroll from 'better-scroll'

export default function Cinema() {
  const [cinemas, setcinemas] = useState([])
  const [keyword, setkeyword] = useState('')

  useEffect(() => {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=510100&ticketFlag=1&k=5261156',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1654244811799267643981825"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res => {
      setcinemas(res.data.data.cinemas)

      new BetterScroll(".wrapper")
    })

  }, [cinemas])

  const getCinemaList = useMemo(() => cinemas.filter(item => item.name.toUpperCase().includes(keyword.toUpperCase()) || item.address.toUpperCase().includes(keyword.toUpperCase())), [cinemas, keyword])


  return <div>
    <input value={keyword} onChange={(evt) => {
      setkeyword(evt.target.value)
    }} />
    <div className='wrapper' style={{
      height: '500px',
      overflow: 'hidden',
      background: 'yellow'
    }}>
      <div className='content' >
        {
          getCinemaList.map(
            item =>
              <dl key={item.cinemaId}>
                <dt>{item.name}</dt>
                <dd>{item.address}</dd>
              </dl>)
        }
      </div>
    </div>
  </div>

}
