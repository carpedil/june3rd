import { useEffect } from "react"
import { hiddeTabBar, showTabBar } from "../../store/actionCreator/TabBarActionCreator"
import store from "../../store/store"
export default function Detail(props) {
    useEffect(() => {
        // 5. store.dispatch 通知
        store.dispatch(hiddeTabBar())
        return () => {
            store.dispatch(showTabBar())
        }
    }, [])

    return <div>Detail-{props.match.params.id} <button onClick={()=>{
        props.history.goBack()
    }}>back</button></div>
}
