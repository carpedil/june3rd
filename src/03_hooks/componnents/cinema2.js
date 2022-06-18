import { useEffect, useMemo, useState } from 'react'
/* npm i --save axios */
import axios from 'axios'
/* npm i --save better-scroll */
import BetterScroll from 'better-scroll'

function useCinemaList() {
  const [cinemaList, setCinemaList] = useState([])

  useEffect(() => {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=510100&ticketFlag=1&k=5261156',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1654244811799267643981825"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res => {
      setCinemaList(res.data.data.cinemas)
      new BetterScroll(".wrapper")
    })

  }, [])

  return {cinemaList}
}


function useFilterList(cinemaList, keyword) {
  const filterCinemaList = useMemo(
    () => cinemaList.filter(
      item => item.name.toUpperCase().includes(keyword.toUpperCase()) || item.address.toUpperCase().includes(keyword.toUpperCase())
    ), [cinemaList, keyword]
  )
  return {filterCinemaList}
}


export default function Cinema() {
  const [keyword, setkeyword] = useState('')

  // 解构时,被解构的对象名称,必须与原对象名称保持一致
  const { cinemaList } = useCinemaList()

  const { filterCinemaList } = useFilterList(cinemaList, keyword)

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
          filterCinemaList.map(
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
