// 1 npm i redux
// 2. 引入redux
// 3. createStore(Reducer)
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
// 导入redux-thunk中间件
import reduxPromise from 'redux-promise'
import reduxThunk from 'redux-thunk'
import cinemaReducer from './reducers/cinemaReducer'
import cityReducer from './reducers/cityReducer'
import tabbarReducer from './reducers/tabbarReducer'

import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
  
const persistConfig = {
  key: 'root',
  storage,
  whitelist:['cityReducer']
}
 

// 通过combineReducers可以将多个reducer进行合并, 
// 不同reducer维护者只需关系自己的业务,而不影响其他人
const reducer = combineReducers({
    tabbarReducer,cityReducer,cinemaReducer
})

const persistedReducer = persistReducer(persistConfig, reducer)


// 应用中间件
const store = createStore(persistedReducer,applyMiddleware(reduxThunk,reduxPromise))
const persistor = persistStore(store)

export { store, persistor }
