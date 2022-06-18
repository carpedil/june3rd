import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import './css/02_films.css'

const GlobalContext = React.createContext()

const initalState = {
    info: '',
    list: []
}

const reducer = (prevState, action) => {
    let newState = { ...prevState }

    switch (action.type) {
        case "getFilmList":
            newState.list = action.value
            return newState
        case "changeInfo":
            newState.info = action.value
            return newState
        default:
            return prevState
    }

}


export default function App() {
    const [state, dispatch] = useReducer(reducer, initalState)

    useEffect(
        () => {
            axios.get('/data.json').then(res => {
                dispatch({
                    type: "getFilmList",
                    value: res.data.data.films
                })
            })
        }, [])
        debugger

    return (
        <GlobalContext.Provider value={
            {
                state,dispatch
            }
        }>
            <div>
                {
                    state.list.map(item =><FilmItem key={item.filmId} {...item} ></FilmItem>)
                }
                <FilmDetail ></FilmDetail>
            </div>
        </GlobalContext.Provider>
    )
}



function FilmItem(props) {
    let { name, poster, grade, category, synopsis } = props
    const { dispatch } = useContext(GlobalContext)

    return <div className='filmItem' onClick={() => {
        // console.log(synopsis)
        dispatch({
            type: "changeInfo",
            value: synopsis
        })
    }}>
        <img src={poster} alt={name} ></img>
        <h3>{name}</h3>
        <h3>观众评分:{grade}</h3>
        <h3>类别:{category}</h3>
    </div>
}


function FilmDetail() {
    const { state } = useContext(GlobalContext)

    return <div className='filmdetail'>{state.info}</div>
}