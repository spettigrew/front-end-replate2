import { combineReducers } from "redux";
import businessReducer from "./businessReducer";
import volunteerReducer from "./volunteerReducer";
import requestReducer from "./requestReducer";

export default combineReducers({
 business: businessReducer,
 volunteer: volunteerReducer,
 foodRequest: requestReducer
});
