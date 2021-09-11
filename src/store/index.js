import {applyMiddleware, combineReducers, createStore} from 'redux';
import {allReducers} from "./reducers";
import thunk from "redux-thunk";

const mainReducer = combineReducers(allReducers);

export const store = createStore(mainReducer, applyMiddleware(thunk));

window.store = store;