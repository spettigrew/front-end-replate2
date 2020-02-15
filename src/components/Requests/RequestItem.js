import React from "react";
import { connect } from "react-redux";
import { deleteRequest, setCurrent } from "../../utils/actions";

const RequestItem = ({ request, deleteRequest, setCurrent }) => {
 const onDelete = () => {
  deleteRequest(request);
 };
 return (
  <li className="collection-item">
   <div>
    <p onClick={() => setCurrent(request)}>{request}</p>
    <br />
    <span className="grey-text">
     <span className="black-text">{request}</span>
    </span>
    <a href="#!" className="secondary-content">
     <button className="delete-button" onClick={onDelete}>
      delete
     </button>
    </a>
   </div>
  </li>
 );
};

export default connect(null, { deleteRequest, setCurrent })(RequestItem);
