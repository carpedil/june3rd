import { useState } from "react"
import store from "../../store/store"

export default function Cinema(props) {
    const [cityName] = useState(store.getState().cityReducer.cityName)
    return <div> 
        <div onClick={()=>{
            props.history.push(`/city`)
        }}>{cityName}</div>
        cinema
        </div>
}
