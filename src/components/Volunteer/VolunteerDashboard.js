import React from "react";
import RequestsItem from "../Requests/RequestItem";

const VolunteerDashboard = props => {
 // initialState
 return (
  <div>
   <h1>Volunteer Dashboard</h1>
   <p>Please choose from the food requests below.</p>
   <RequestsItem />
  </div>
 );
};
export default VolunteerDashboard;
