import React from "react";
import { connect } from "react-redux";
import { deleteRequest, setCurrent } from "../../utils/actions";
import {
    Card,  
    CardBody,
    CardHeader
} from "reactstrap";

const RequestItem = ({request, deleteRequest, setCurrent}) => {
 const onDelete = () => {
  deleteRequest(request);
 };
 console.log(request)
 
    return (
  <Card className="collection-item">
   <CardBody onClick={() => setCurrent(request)}>
    <br />
             <CardHeader tag= "h3">
                 
    </CardHeader>
        <div>
            <ul>
           <li className="black-text">{request.description}</li>
           <li className="black-text">{request.servings}</li>
           <li className="black-text">{request.pickup_time}</li>
            </ul>
        </div>
    <a href="#!" className="secondary-content">
     <button className="delete-button" onClick={onDelete}>
      delete
     </button>
    </a>
   </CardBody>
  </Card>
 );
};

export default connect(null, { deleteRequest, setCurrent })(RequestItem);
