import { useState } from 'react'

export default function App() {
    const [count, setCount] = useState(0)
    // useState 本身就是一个记忆函数
    console.log(count)
    var mycount = 0
    return (
        <div>
            {count}--{mycount}
            <button onClick={()=>{
                setCount(count+1)
                mycount++
            }}>click</button>
        </div>
    )
}
