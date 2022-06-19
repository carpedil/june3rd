// 1 npm i redux
// 2. 引入redux
// 3. createStore(Reducer)
import { createStore } from 'redux'

const reducer = (prevState={
    show:true
},action) =>{
    console.log(action.type,action.value)
    let newState = {...prevState}
    let value = action.value

    switch(action.type){
        case "show-tabbar":
            newState.show = value
            return newState
        case "hidde-tabbar":
            newState.show = value
            return newState
        default:
            return prevState
    }
}

const store = createStore(reducer)

export default store