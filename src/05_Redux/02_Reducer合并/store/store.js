// 1 npm i redux
// 2. 引入redux
// 3. createStore(Reducer)
import { combineReducers, legacy_createStore as createStore } from 'redux'
import cityReducer from './reducers/cityReducer'
import tabbarReducer from './reducers/tabbarReducer'

// 通过combineReducers可以将多个reducer进行合并, 
// 不同reducer维护者只需关系自己的业务,而不影响其他人
const reducer = combineReducers({
    tabbarReducer,cityReducer
})

const store = createStore(reducer)

export default store