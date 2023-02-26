import {createStore ,applyMiddleware, combineReducers} from 'redux';
import  BadgeReducer  from './reducer';

const reducer = combineReducers({
   BadgeReducer
})


const store = createStore(reducer)

export default store