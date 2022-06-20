import { Component } from "react"

import IndexRouter from './components/router/IndexRouter'
import TabBar from "./components/tabbar/TabBar"
import store from "./store/store"

export default class App extends Component {
    state ={
        isShow: store.getState().show
    }

    componentDidMount() { 
        console.log(store.getState())
        // 4 store.subscribe 订阅
        store.subscribe(() => {
            this.setState({
                isShow: store.getState().show
            })
        })
     }
     
    render(){
        return (
            <div>
                <IndexRouter>
                    {this.state.isShow && <TabBar />}
                </IndexRouter>
            </div>
        )
    }
}
