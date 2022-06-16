import { useCallback, useState } from 'react'

export default function App() {
    const [item, setItem] = useState('')
    const [list, setList] = useState([])

    // useCallback 防止因为组件重新渲染,导致方法重新创建,起到缓存作用,只有第二个参数变化了,函数才重新声明创建一次
    const handelChange = useCallback(
        (evt) => {
            setItem(evt.target.value)
        },
        [],
    )


    const handelClick = useCallback(
        () => {
            console.log(item)
            setList([...list, item])
        },[item,list]
    )
    const handelDelete = useCallback(
        (index) => {
            console.log(index)
            let newList = [...list]
            newList.splice(index, 1)
            setList([...newList])
        },[list]
    )

    return (
        <div>
            <input type="text" onChange={handelChange} />
            <button onClick={handelClick}>add</button>
            <ul>
                {
                    list.map((item, index) => <li key={index}>{item}<button onClick={() => handelDelete(index)}>del</button></li>)
                }
            </ul>
            {!list.length && <div>暂无代办事项</div>}
        </div>
    )
}
