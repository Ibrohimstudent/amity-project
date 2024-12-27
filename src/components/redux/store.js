import {createStore,combineReducers,applyMiddleware} from "redux";
import {logger} from "redux-logger/src";
import XodimlarReducer from "./reducers/XodimlarReducer";
import CategoryReducer from "./reducers/CategoryReducer";
import KurslarReducer from "./reducers/KurslarReducer";
import ContactReducer from "./reducers/ContactReducer"
export const store = createStore(combineReducers({
    XodimlarReducer,
    CategoryReducer,
    KurslarReducer,
    ContactReducer
    }),
    applyMiddleware(logger))