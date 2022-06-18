import React, { useContext, useReducer } from "react"

const initalState = {
    a: "111",
    b: "222",
}
const GloablCondext = React.createContext()

const reducer = (prevState, action) => {
    console.log("reducer call")

    let newState = { ...prevState }
    switch (action.type) {
        case "change-a":
            newState.a = action.value
            return newState
        case "change-b":
            newState.b = action.value
            return newState
        default:
            return prevState
    }
}

// 写法1

export default function App() {

    const [state, dispatch] = useReducer(reducer, initalState)

    return (
        <GloablCondext.Provider value={
            {
                state,
                dispatch
            }
        }>
            <div>
            <Child1 ></Child1>
            <Child2 ></Child2>
            <Child3 ></Child3>
             </div>
        </GloablCondext.Provider>
    )
}


function Child1() {
    const {dispatch} = useContext(GloablCondext)

    return <div style={{
    }}>
        <button onClick={() => {
            dispatch({
                type: 'change-a',
                value:'a has been changed'
            })
        }}>改变2</button>
        <button onClick={() => {
            dispatch({
                type: 'change-b',
                value:'b has been changed'
            })
        }}>改变3</button>
    </div>
}

function Child2() {
    const {state} = useContext(GloablCondext)

    return <div style={{
        background: 'yellow',
        height: '100px'
    }}>Child2-{state.a}</div>
}

function Child3() {
    const {state} = useContext(GloablCondext)

    return <div style={{
        background: 'red',
        height: '100px'
    }}>Child3-{state.b}</div>
}

// 写法2

// export default function App() {

//     const [state, dispatch] = useReducer(reducer, initalState)

//     return (
//         <div>
//             <Child1 dispatch={dispatch}></Child1>
//             <Child2 a={state.a}></Child2>
//             <Child3 b={state.b}></Child3>
//         </div>
//     )
// }


// function Child1(props) {

//     return <div style={{
//     }}>
//         <button onClick={() => {
//             props.dispatch({
//                 type: 'change-a'
//             })
//         }}>改变2</button>
//         <button onClick={() => {
//             props.dispatch({
//                 type: 'change-b'
//             })
//         }}>改变3</button>
//     </div>
// }

// function Child2(props) {

//     return <div style={{
//         background: 'yellow',
//         height: '100px'
//     }}>Child2-{props.a}</div>
// }

// function Child3(props) {

//     return <div style={{
//         background: 'red',
//         height: '100px'
//     }}>Child3-{props.b}</div>
// }