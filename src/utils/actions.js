import {
 GET_REQUESTS,
 REQUESTS_ERROR,
 ADD_REQUEST,
 DELETE_REQUEST,
 SET_CURRENT,
 CLEAR_CURRENT,
 UPDATE_REQUEST,
 SEARCH_REQUESTS
} from "./types";
import axiosWithAuth from "./axiosWithAuth";


export const getRequests = () => dispatch => {
 axiosWithAuth()
  .get("/api/foodRequest/")
  .then(res => {
      console.log("data here", res.data);
      dispatch({
          type: GET_REQUESTS,
          payload: res.data
      });
   
  })

  .catch(err => {
    dispatch({
       type: REQUESTS_ERROR,
       payload: err.response
   })
  }
 )
};

// Add(POST) new REQUEST
export const addRequest = request => async dispatch => {
 try {
  const res = await fetch("/requests", {
   method: "POST",
   body: JSON.stringify(request),
   headers: {
    "Content-Type": "application/json"
   }
  });
  const data = await res.json();

  dispatch({
   type: ADD_REQUEST,
   payload: data
  });
 } catch (err) {
  console.REQUEST(err.response);
  dispatch({
   type: REQUESTS_ERROR,
   payload: err.response
  });
 }
};

// Delete REQUEST from server
export const deleteRequest = (id, props) => dispatch => {
 try {
  axiosWithAuth()
   .delete(`/api/foodRequest/:${id}`)
   .then(res => {
    console.log(res);
       dispatch({
           type: DELETE_REQUEST,
           payload: id
       });
    localStorage.setItem("token", res.data.token);
    props.history.push("business/home");
   });


 } catch (err) {
  dispatch({
   type: REQUESTS_ERROR,
   payload: err.response
  });
 }
};

// Update REQUEST on server
export const updateRequest = request => async dispatch => {
 try {
  const res = await fetch(`/requests/${request.id}`, {
   method: "PUT",
   body: JSON.stringify(request),
   headers: {
    "Content-Type": "application/json"
   }
  });
  const data = await res.json();

  dispatch({
   type: UPDATE_REQUEST,
   payload: data
  });
 } catch (err) {
  dispatch({
   type: REQUESTS_ERROR,
   payload: err.response
  });
 }
};

// Search REQUESTs
export const searchRequests = text => async dispatch => {
 try {
  const res = await fetch(`/requests?q=${text}`);
  const data = await res.json();

  dispatch({
   type: SEARCH_REQUESTS,
   payload: data
  });
 } catch (err) {
  dispatch({
   type: REQUESTS_ERROR,
   payload: err.response
  });
 }
};

// Set current REQUEST
export const setCurrent = request => {
 return {
  type: SET_CURRENT,
  payload: request
 };
};

// Clear current REQUEST
export const clearCurrent = () => {
 return {
  type: CLEAR_CURRENT
 };
};
