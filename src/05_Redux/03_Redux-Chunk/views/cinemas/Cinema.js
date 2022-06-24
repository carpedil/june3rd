import { useEffect, useState } from "react"
import getCinemaList from "../../store/actionCreator/cinemaListActionCreator"
import store from "../../store/store"

export default function Cinema(props) {
    const [cityName] = useState(store.getState().cityReducer.cityName)
    const [list, setList] = useState(store.getState().cinemaReducer.list)
    useEffect(() => {
        if(store.getState().cinemaReducer.list.length ===0){
            // 向后台取数据
            console.log('get data from axios')
            store.dispatch(getCinemaList())
        }else{
            // 使用缓存
            console.log('get data from store')
            setList(store.getState().cinemaReducer.list)
        }
     
       const  unsubscribe =  store.subscribe(()=>{
            setList(store.getState().cinemaReducer.list)
        })
        // 在组件销毁时取消订阅
        return ()=>{
            unsubscribe()
        }
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
