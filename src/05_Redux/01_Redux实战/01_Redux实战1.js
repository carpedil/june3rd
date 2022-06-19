import { useEffect, useState } from "react"

import IndexRouter from './components/router/IndexRouter'
import TabBar from "./components/tabbar/TabBar"
import store from "./store/store"

export default function App() {
    const [isShow, setIsShow] = useState(true)

    useEffect(() => {
        console.log(store.getState())
        // 4 store.subscribe 订阅
        store.subscribe(() => {
            setIsShow(store.getState().isShow)
        })
    }, [isShow])


    return (
        <div>
            <div>
                <IndexRouter>
                   {isShow && <TabBar /> }
                </IndexRouter>
            </div>
        </div>
    )
}
