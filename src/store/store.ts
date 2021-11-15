import { applyMiddleware, combineReducers, compose, createStore } from "redux";

import thunkMiddleware from 'redux-thunk'
import { appReducer } from "./appReducer";



let reducers = combineReducers({
   app: appReducer
})


const composeEnhancers = (typeof window !== 'undefined' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(reducers, composeEnhancers( 

   applyMiddleware(thunkMiddleware)

));

export default store

