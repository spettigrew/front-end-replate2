import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../../utils/axiosWithAuth";
import {
 Card,
 CardImg,
 CardText,
 CardBody,
 CardTitle,
 CardSubtitle,
 CardHeader
} from "reactstrap";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const BusinessRequestIn = props => {
  const history = useHistory()
 //set local state
 const [requestIn, setRequestIn] = useState({
  username: "",
  password: ""
 });

 //set requestIn event
 const bRequestIn = e => {
  e.preventDefault();
  axiosWithAuth()
   .post("/api/businesses/login", requestIn)
   .then(res => {
    console.log(res);
    localStorage.setItem("token", res.data.token);
    history.push("/requests");
   });
 };

 //handle change
 const handleChange = e => {
  setRequestIn({
   ...requestIn,
   [e.target.name]: e.target.value
  });
 };

 return (
  <div className="requestIn-page">
   <Card>
    <CardBody>
     <CardHeader tag="h3">Business Login</CardHeader>
     <Form onSubmit={bRequestIn}>
      <FormGroup>
       <Label for="username" hidden>
        Username{" "}
       </Label>
       <Input
        type="text"
        name="username"
        id="username"
        placeholder="Username"
        onChange={handleChange}
       />
      </FormGroup>{" "}
      <FormGroup>
       <Label for="password" hidden>
        Password{" "}
       </Label>
       <Input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        onChange={handleChange}
       />
      </FormGroup>{" "}
      <Button>Log In</Button>
     </Form>
    </CardBody>
   </Card>
  </div>
 );
};

export default BusinessRequestIn;
