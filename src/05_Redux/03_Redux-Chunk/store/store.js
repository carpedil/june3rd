// 1 npm i redux
// 2. 引入redux
// 3. createStore(Reducer)
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
// 导入redux-thunk中间件
import reduxThunk from 'redux-thunk'
import cityReducer from './reducers/cityReducer'
import tabbarReducer from './reducers/tabbarReducer'
import cinemaReducer from './reducers/cinemaReducer'

// 通过combineReducers可以将多个reducer进行合并, 
// 不同reducer维护者只需关系自己的业务,而不影响其他人
const reducer = combineReducers({
    tabbarReducer,cityReducer,cinemaReducer
})

// 应用中间件
const store = createStore(reducer,applyMiddleware(reduxThunk))

export default store