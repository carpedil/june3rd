const tabbarReducer = (prevState={
    show:true
},action={}) =>{
    let newState = {...prevState}
    let payload = action.payload

    switch(action.type){
        case "show-tabbar":
            newState.show = payload
            return newState
        case "hidde-tabbar":
            newState.show = payload
            return newState
        default:
            return prevState
    }
}

export default tabbarReducer