
const cityReducer = (prevState={
    cityName:'成都'
},action={}) =>{
    let newState = {...prevState}
    let payload = action.payload

    switch(action.type){
        case "change-city":
            newState.cityName = payload
            return newState
        default:
            return prevState
    }
}

export default cityReducer
