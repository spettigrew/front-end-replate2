import {
 GET_REQUESTS,
 REQUESTS_ERROR,
 ADD_REQUEST,
 DELETE_REQUEST,
 UPDATE_REQUEST,
 SET_CURRENT,
 CLEAR_CURRENT,
 SEARCH_REQUESTS
} from "../utils/types";

const initialState = {
 type: "",
 servings: 0,
 pickup_time: 1581066814,
 description: "Describe food to be picked up.",
 completed: false,
 business_id: null,
 volunteer_id: null
};

export default (state = initialState, action) => {
 switch (action.type) {
  case GET_REQUESTS:
   return {
    ...state,
    requests: action.payload
   };
  case ADD_REQUEST:
   return {
    ...state,
    requests: [...state.requests, action.payload]
   };
  case DELETE_REQUEST:
   return {
    ...state,
    requests: state.requests.filter(request => request.id !== action.payload)
   };
  case UPDATE_REQUEST:
   return {
    ...state,
    requests: state.requests.map(request =>
     request.id === action.payload.id ? action.payload : request
    )
   };
  case SEARCH_REQUESTS:
   return {
    ...state,
    requests: action.payload
   };
  case SET_CURRENT:
   return {
    ...state,
    current: action.payload
   };
  case CLEAR_CURRENT:
   return {
    ...state,
    current: null
   };
  case REQUESTS_ERROR:
   console.error(action.payload);
   return {
    ...state,
    error: action.payload
   };
  default:
   return state;
 }
};
