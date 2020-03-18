import React, { useEffect } from "react";
import { useDispatch } from "react-router-dom";
import { connect } from "react-redux";
import RequestItem from "./RequestItem";
import { getRequests } from "../../utils/actions";

const Requests = ({requests, getRequests}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getRequests())
    // eslint-disable-next-line
    }, [dispatch]);
    console.log(requests)

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

const mapStateToProps = state => {
 get.requests
};
console.log(mapStateToProps);

export default connect(mapStateToProps, { getRequests })(Requests);
