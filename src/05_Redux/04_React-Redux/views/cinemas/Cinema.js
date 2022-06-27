import { useEffect } from "react"
import { connect } from "react-redux"
import getCinemaList from "../../store/actionCreator/cinemaListActionCreator"

function Cinema(props) {
    let {getCinemaList,list,cityName} = props
    useEffect(() => {
        if (list.length === 0) {
            // 向后台取数据
            console.log('get data from axios')
            getCinemaList()
        } 
    }, [list,getCinemaList])
    return <div>
        <div style={{overflow:'hidden'}}>
            <div onClick={() => {
                props.history.push(`/city`)
            }} style={{float:'left'}}>{cityName}</div>
            <div style={{float:'right'}} onClick={() => {
                props.history.push(`/cinemas/search`)
            }}>Search</div>
        </div>


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

const mapStateToProps =(state)=>{
    return{
        list:state.cinemaReducer.list,
        cityName:state.cityReducer.cityName
    }
}

const mapDispatchToProps = {
    getCinemaList,
}
export default connect(mapStateToProps,mapDispatchToProps)(Cinema)