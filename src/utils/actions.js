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
import axios from "axios";

export const getRequests = (res, err) => async dispatch => {
 axiosWithAuth()
  .get("/api/foodRequests/")
  .then(res => {
   console.log(res.data);
  })
  .catch(err => console.log(err));

 dispatch({
  type: GET_REQUESTS,
  payload: res.data
 });

 dispatch({
  type: REQUESTS_ERROR,
  payload: err.response
 });
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
export const deleteRequest = (id, props) => async dispatch => {
 try {
  axiosWithAuth()
   .delete(`/api/foodrequests/:${id}`)
   .then(res => {
    console.log(res);
    localStorage.setItem("token", res.data.token);
    props.history.push("business/home");
   });

  dispatch({
   type: DELETE_REQUEST,
   payload: id
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
