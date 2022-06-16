import axios from 'axios'
import { useEffect, useState } from 'react'

export default function App() {
    const [list, setlist] = useState([])


    useEffect(() => {
        axios.get('/data.json').then(res => {
            console.log(res.data.data)
            setlist(res.data.data.films)
        })

    }, []) // 传[]数组


    return (
        <div>
            <ul>
                {
                    list.map(item => <li key={item.filmId}>{item.name}</li>)
                }
            </ul>
        </div>
    )
}
