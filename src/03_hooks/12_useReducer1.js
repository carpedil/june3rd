import { useReducer } from 'react'


 // 初始状态
 const initalState = {
    count: 0
}
// 处理函数
const reducer = (prevState, action) => {
    console.log(prevState, action)
    let newState = {...prevState}
    switch (action.type) {
        case "add":
             newState.count++
             return newState
        case "minus":
             newState.count--
             return newState
        default:
            return prevState
    }
}

export default function App() {
    const [state, dispatch] = useReducer(reducer, initalState)

    return (
        <div>
            <button onClick={() => {
                dispatch({
                    type: "minus"
                })
            }}>-</button>
            {state.count}
            <button onClick={() => {
                dispatch({
                    type: "add"
                })
            }}>+</button>
        </div>
    )
}
