import { withRouter } from "react-router-dom"

function Center(props) {
    return (
        <div>
            <div onClick={() => {
                props.history.push(`/orders`)
            }}>客户订单</div>
        </div>
    )
}

 const CenterWithRouter = withRouter(Center)

 export default CenterWithRouter