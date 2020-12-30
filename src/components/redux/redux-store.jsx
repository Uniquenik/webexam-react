import {combineReducers, createStore} from 'redux';
import formReducer from './form-reducer';
import someReducer from'./some-reducer';
//несколько reducers
let reducers = combineReducers({
    formReducer,
    someReducer
});

let store = createStore(reducers);

export default store;
