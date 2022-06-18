import { useRef, useState } from 'react'

export default function App() {
    const [list, setList] = useState([])
    // 用于保存临时变量
    const mytext = useRef()


    const handelClick = ()=>{
        setList([...list,mytext.current.value])
        mytext.current.value=''
    }
    const handelDelete=(index)=>{
        console.log(index)
        let newList = [...list]
        newList.splice(index,1)
        setList([...newList])
    }

    return (
        <div>
           <input type="text" ref={mytext} />
           <button onClick={handelClick}>add</button>
           <ul>
            {
                list.map((item,index) => <li key={index}>{item}<button onClick={()=>handelDelete(index)}>del</button></li>)
            }
           </ul>
           {!list.length && <div>暂无代办事项</div>}
        </div>
    )
}
