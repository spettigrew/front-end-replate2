import React, { useState } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import "../../css/AppBusinessRequest.css";
import axios from "axios";

const BusinessDashboard = props => {
 // initialState
 const [requestAdd, setRequestAdd] = useState({
  id: "",
  type: "",
  servings: "",
  pickup_time: Date.now(),
  description: "describe food to be picked up.",
  completed: false,
  business_id: "",
  volunteer_id: ""
 });

 // add request
 const newRequestAdd = e => {
  e.preventDefault();
  axios
   .post("https://testapi.io/api/cd765/foodrequests", requestAdd)
   .then(res => {
    console.log(res.data);
    console.log(props.history);
    props.history.push("/business/home");
   })
   .catch(err => console.log(err));
 };

 //change handler
 const handleChange = e => {
  setRequestAdd({
   ...requestAdd,
   [e.target.name]: e.target.value
  });
 };

 return (
  <div>
   <h1>Business Request Form</h1>
   <p>Please fill out the food request form below.</p>
   <div className="business-register-form">
    <Form onSubmit={newRequestAdd}>
     <Row form>
      <Col md={6}>
       <FormGroup>
        <Label for="exampleType">Type</Label>
        <Input
         type="text"
         name="type"
         id="type"
         placeholder="type"
         onChange={handleChange}
        />
       </FormGroup>
      </Col>
     </Row>
     <FormGroup>
      <Label for="examplePhone">Description</Label>
      <Input
       type="textarea"
       name="description"
       id="exampleDescription"
       placeholder="Describe food to be picked up."
       onChange={handleChange}
      />
     </FormGroup>
     <FormGroup>
      <Label for="exampleName">Pick-up Time</Label>
      <Input
       type="datetime-local"
       name="pickup_time"
       id="examplepickup_time"
       placeholder="Choose pick-up Time"
       onChange={handleChange}
      />
     </FormGroup>
     <FormGroup>
      <Label for="exampleComplete">Servings</Label>
      <Input
       type="text"
       name="servings"
       id="exampleServings"
       placeholder="Choose number of servings"
       onChange={handleChange}
      />
     </FormGroup>
     <FormGroup>
      <Label for="exampleComplete">Completed</Label>
      <Input
       type="checkbox"
       name="completed"
       id="exampleCompleted"
       onChange={handleChange}
      />
     </FormGroup>
     <Button>Submit Request</Button>
    </Form>
   </div>
   <div>
    <h1>Current Requests</h1>
    <p>
     Map over data once able to get a response back from the server in order to
     see any open requests currently. example:
    </p>
   </div>
  </div>
 );
};
export default BusinessDashboard;
