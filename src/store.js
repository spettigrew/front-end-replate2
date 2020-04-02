import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
//import logger from "redux-logger";

//const initialState = {};

const middleware = [thunk];

export const store = createStore(
 rootReducer,
 //initialState,
 applyMiddleware(thunk)
);

export default store;
