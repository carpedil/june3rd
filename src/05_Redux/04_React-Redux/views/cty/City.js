import { useState } from 'react'
import changeCity from '../../store/actionCreator/cityActionCreator'
import store from '../../store/store'

export default function City(props) {
    const [list] = useState(['成都', '北京', '上海'])

    return (
        <div>
            <ul>
                {
                    list.map(item =>
                        <li key={item} onClick={()=>{
                            store.dispatch(changeCity(item))
                            props.history.goBack()
                       }}>{item}</li>
                    )
                }
            </ul>
        </div>
    )
}
