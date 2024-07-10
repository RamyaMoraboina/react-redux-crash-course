import { legacy_createStore,applyMiddleware,compose} from "redux";
import laptopReducer from "./reducers/laptopReducer";
import userReducer from "./reducers/userReducer";
import mobileReducer from "./reducers/mobileReducer";
import { combineReducers } from "redux";
import {thunk} from 'redux-thunk';
import logger from 'redux-logger';

// const thunk = require('redux-thunk').default;
// const {thunk} = require('redux-thunk') ;

const rootReducer = combineReducers(
    {laptop:laptopReducer,mobile:mobileReducer,users : userReducer}
)
const store = legacy_createStore(rootReducer,compose(applyMiddleware(thunk,logger),window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__(),));
export default store;

