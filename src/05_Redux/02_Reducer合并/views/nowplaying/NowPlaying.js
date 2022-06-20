import { useEffect, useState } from "react"
import { withRouter } from "react-router-dom"

import axios from "axios"

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

    return (
        <div>
            <ul>
                {
                    list.map(item =>
                        <FilmItenWithRouter key={item.filmId} {...item} />
                    )
                }
            </ul>
        </div>
    )
}
// =================================== FilmItem ==============================================


function FilmItem(props) {
    let { name, filmId } = props
    return (
        <li key={filmId} onClick={() => {
            props.history.push(`/film/${filmId}`)
        }}>
            {name}
        </li>
    )
}

const FilmItenWithRouter = withRouter(FilmItem)
