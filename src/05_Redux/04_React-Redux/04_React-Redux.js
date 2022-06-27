import { Component } from "react"

import IndexRouter from './components/router/IndexRouter'
import TabBar from "./components/tabbar/TabBar"
import { connect } from "react-redux"

class App extends Component {     
    render(){
        return (
            <div>
                <IndexRouter>
                    {this.props.isShow && <TabBar />}
                </IndexRouter>
            </div>
        )
    }
}
const mapStateToProps =(state)=>{
    return {
        isShow:state.tabbarReducer.show,
    }
}

export default connect(mapStateToProps)(App)