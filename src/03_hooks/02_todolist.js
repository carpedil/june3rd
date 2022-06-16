import React ,{useState}from 'react'

export default function App() {
    const [item, setItem] = useState('')
    const [list, setList] = useState([])

    const handelChange =(evt)=>{
        setItem(evt.target.value)
    }

    const handelClick = ()=>{
        console.log(item)
        setList([...list,item])
    }
    const handelDelete=(index)=>{
        console.log(index)
        let newList = [...list]
        newList.splice(index,1)
        setList([...newList])
    }

    return (
        <div>
           <input type="text" onChange={handelChange} />
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
