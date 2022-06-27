import { useEffect, useMemo, useState } from "react"
import getCinemaList from "../../store/actionCreator/cinemaListActionCreator"
import store from "../../store/store"

export default function Search() {
    const [list, setList] = useState(store.getState().cinemaReducer.list)
    const [keyword, setkeyword] = useState('')
    useEffect(() => {
        if (store.getState().cinemaReducer.list.length === 0) {
            // 向后台取数据
            console.log('get data from axios')
            store.dispatch(getCinemaList())
        } else {
            // 使用缓存
            console.log('get data from store')
            setList(store.getState().cinemaReducer.list)
        }
        const unsubscribe = store.subscribe(() => {
            setList(store.getState().cinemaReducer.list)
        })
        // 在组件销毁时取消订阅
        return () => {
            unsubscribe()
        }
    }, [])

    const CinemaList = useMemo(() => list.filter(item => item.name.toUpperCase().includes(keyword.toUpperCase()) || item.address.toUpperCase().includes(keyword.toUpperCase())), [list, keyword])

    return (
        <div>
            <div>
            <input value={keyword} onChange={(evt) => {
      setkeyword(evt.target.value)
    }} />
            </div>
            <div>
                <ul>
                    {
                        CinemaList.map(
                            item =>
                                <dl key={item.cinemaId}>
                                    <dt>{item.name}</dt>
                                    <dd>{item.address}</dd>
                                </dl>)
                    }
                </ul>
            </div>
        </div>
    )
}
