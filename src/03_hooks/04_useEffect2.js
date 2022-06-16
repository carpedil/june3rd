import { useEffect, useState } from 'react'

export default function App() {
    const [name, setname] = useState('jack')


    useEffect(() => {
        setname(
            name.substring(0,1).toUpperCase()+name.substring(1)
        )

    }, [name]) // 传[]数组


    return (
        <div>
            App-{name}
            <button onClick={()=>{
                setname('tom')
            }}>click</button>
        </div>
    )
}
