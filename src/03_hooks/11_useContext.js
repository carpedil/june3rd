import axios from 'axios'
import React, { useEffect, useState,useContext } from 'react'
import './css/02_films.css'

// 1. 创建Contex
const GlobalContext = React.createContext()

export default function App(){
    const [info, setinfo] = useState('')
    const [filmList, setFilmList] = useState([])


    useEffect(() => {
        axios.get('/data.json').then(res => {
            setFilmList(res.data.data.films)
        })
    }, [filmList])
    


    return (
        // 2. GlobalContex.Provider 中的value对象的属性和方法,在所有Consumer组件中都可以访问和调用, 特喵的value还必须写的一毛一样????~!!
        <GlobalContext.Provider value={{
            info: info,
            changeInfo: (value) => {
               setinfo(value)
            }
        }}>
            <div>
                <h1>Context模式</h1>
                {
                    filmList.map(item => {
                        return <FilmItem key={item.filmId} {...item} ></FilmItem>
                    })
                }
                <FilmDetail ></FilmDetail>
            </div>
        </GlobalContext.Provider>
    )
}



function FilmItem(props){
    let { name, poster, grade, category, synopsis } = props
    const value = useContext(GlobalContext)

    return <div className='filmItem' onClick={() => {
        // console.log(synopsis)
        value.changeInfo(synopsis)
    }}>
        <img src={poster} alt={name} ></img>
        <h3>{name}</h3>
        <h3>观众评分:{grade}</h3>
        <h3>类别:{category}</h3>
    </div>
}


function FilmDetail() {

    const value = useContext(GlobalContext)

    return <div className='filmdetail'>{value.info}</div>
}