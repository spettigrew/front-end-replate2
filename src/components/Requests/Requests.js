import React, { useEffect } from "react";
import { connect } from "react-redux";
import RequestItem from "./RequestItem";
import { getRequests } from "../../utils/actions";

export const Requests = ({ request: { requests }, getRequests }) => {
 useEffect(() => {
  getRequests();
  // eslint-disable-next-line
 }, []);

 return (
  <ul className="collection with-header">
   <li className="collection-header">
    <h4 className="center">Food Requests</h4>
   </li>
   {requests.length === 0 ? (
    <p className="center">No requests to show...</p>
   ) : (
    requests.map(request => <RequestItem request={request} key={request.id} />)
   )}
  </ul>
 );
};

const mapStateToProps = state => ({
 request: state.request
});

console.log(mapStateToProps);

export default connect(mapStateToProps, { getRequests })(Requests);
