import { GET_REQUESTS } from "../utils/types";

const initialState = {
 username: "",
 password: "",
 name: "",
 phone: ""
};

export default (state = initialState, action) => {
 switch (action.type) {
  case GET_REQUESTS:
   return {
    ...state,
    requests: action.payload
   };

  default:
   return state;
 }
};
