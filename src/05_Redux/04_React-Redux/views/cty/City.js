import { useState } from 'react'
import { connect } from 'react-redux'
import changeCity from '../../store/actionCreator/cityActionCreator'

function City(props) {
    const [list] = useState(['成都', '北京', '上海'])
    let { changeCity } = props

    return (
        <div>
            <ul>
                {
                    list.map(item =>
                        <li key={item} onClick={() => {
                            changeCity(item)
                            props.history.goBack()
                        }}>{item}</li>
                    )
                }
            </ul>
        </div>
    )
}

const mapDispatchToProps = {
    changeCity
}
export default connect(null, mapDispatchToProps)(City)