import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import messagesPage from "./messages-reducer";

let reducer = combineReducers({
    messagesPage: messagesPage
})

let store = createStore(reducer, applyMiddleware(thunkMiddleware))

export default  store