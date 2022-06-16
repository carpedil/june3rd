import React ,{useState}from 'react'

export default function App() {
    const [name, setName] = useState('jack')

    return (
        <div>
            <button onClick={()=>{
                setName('rose')
            }}>click</button>
            App-{name}
        </div>
    )
}
