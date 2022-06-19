import { Component } from 'react'
import { withRouter } from 'react-router-dom'


 class Center extends Component {
    render() {
        return (
            <div>
                Center
                <div onClick={()=>{
                    console.log(this.props)
                    this.props.history.push(`/orders`)
                }}>客户订单</div>
            </div>
        )
    }
}

// 使用withRouter() 可以进行跨组件传递路由相关参数
export default withRouter(Center)