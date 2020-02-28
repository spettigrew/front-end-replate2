import React, { useState, useEffect } from "react";
import axios from "axios";
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

const VolunteerRequestIn = props => {
 //set local state
 const [requestIn, setrequestIn] = useState({
  username: "",
  password: ""
 });

 //set requestIn event
 const vRequestIn = e => {
  e.preventDefault();
  axios
   .post("https://replate2.herokuapp.com//api/volunteers/login", requestIn)
   .then(res => {
    console.request(res);
    localStorage.setItem("token", res.data.token);
    props.history.push("/volunteer-home");
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
  <div className="requestin-page">
   <Card>
    <CardBody>
     <CardHeader tag="h3">Volunteer Login</CardHeader>
     <Form onSubmit={vRequestIn}>
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
      <Button>Request In</Button>
     </Form>
    </CardBody>
   </Card>
  </div>
 );
};

export default VolunteerRequestIn;
