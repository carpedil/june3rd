import { useEffect, useState } from "react"
import getCinemaList from "../../store/actionCreator/cinemaListActionCreator"
import store from "../../store/store"

export default function Cinema(props) {
    const [cityName] = useState(store.getState().cityReducer.cityName)
    const [list, setList] = useState(store.getState().cinemaReducer.list)
    useEffect(() => {
        if(store.getState().cinemaReducer.list.length ===0){
            // 向后台取数据
            store.dispatch(getCinemaList())
        }else{
            // 使用缓存
            setList(store.getState().cinemaReducer.list)
        }
     
        store.subscribe(()=>{
            setList(store.getState().cinemaReducer.list)
        })
    }, [])    
    return <div> 
        <div onClick={()=>{
            props.history.push(`/city`)
        }}>{cityName}</div>
        <div>
            <ul>
            {
              list.map(
                item =>
                  <dl key={item.cinemaId}>
                    <dt>{item.name}</dt>
                    <dd>{item.address}</dd>
                  </dl>)
            }
            </ul>
        </div>
        </div>
}
