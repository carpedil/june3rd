

const cinemaReducer = (prevState={
    list:[]
},action={}) =>{

    let newState = {...prevState}
    let payload = action.payload

    switch(action.type){
        case "change-list":
            newState.list = payload
            return newState
        default:
            return prevState
    }
}

export default cinemaReducer
