import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import logger from "redux-logger";

const initialState = {};

const middleware = [thunk, logger];

export const store = createStore(
 rootReducer,
 initialState,
 composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
