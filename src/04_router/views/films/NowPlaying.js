import axios from "axios"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
// import { NavLink } from "react-router-dom"

export default function NowPlaying() {

  const [list, setList] = useState([])
  

  useEffect(() => {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=510100&pageNum=1&pageSize=10&type=1&k=9761773',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16551278091379113998745601","bc":"510100"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      setList(res.data.data.films)
    })

  }, [])

  const history = useHistory()

  const handelClick =(id)=>{
    history.push(`/film/${id}`)
  }

  return (
    <div>
      <ul>
        {
          list.map(item=>
            <li key={item.filmId} onClick={()=>{
              handelClick(item.filmId)
            }}>
              {/* <NavLink to={'/film/'+item.filmId}>{item.name}</NavLink> */}
              {item.name}
            </li>
            )
        }
      </ul>
    </div>
  )
}
