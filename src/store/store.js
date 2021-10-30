import { combineReducers, createStore } from 'redux'

import mainReducer from './mainReducer'

let reducers = combineReducers({
    personData: mainReducer,
})

const store = createStore(reducers);


export default store