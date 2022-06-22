function createMyStore(reducer){
    let list =[]
    let state = reducer()
    function subscribe(callback){
        list.push(callback)
    }

    function dispatch(action){
        state = reducer(state,action)
        for(let i in list){
            list[i] && list[i]()
        }
    }

    function getState(action){
        return state
    }

    return {
        subscribe,
        dispatch,
        getState
    }
}