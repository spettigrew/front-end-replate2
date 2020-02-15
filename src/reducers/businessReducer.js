import {
 GET_REQUESTS,
 ADD_REQUEST,
 DELETE_REQUEST,
 UPDATE_REQUEST
} from "../utils/types";

const initialState = {
 username: "",
 password: "",
 name: "",
 address: "",
 phone: "",
 email: ""
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
  default:
   return state;
 }
};
