import React, { useState } from "react";
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

const Businessrequestin = props => {
 //set local state
 const [requestin, setrequestin] = useState({
  username: "",
  password: ""
 });

 //set requestin event
 const brequestin = e => {
  e.preventDefault();
  axiosWithAuth()
   .post("/api/businesses/login", requestin)
   .then(res => {
    console.log(res);
    localStorage.setItem("token", res.data.token);
    props.history.push("/api/businesses/login");
   });
 };

 //handle change
 const handleChange = e => {
  setrequestin({
   ...requestin,
   [e.target.name]: e.target.value
  });
 };

 return (
  <div className="requestin-page">
   <Card>
    <CardBody>
     <CardHeader tag="h3">Business Login</CardHeader>
     <Form onSubmit={brequestin}>
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

export default Businessrequestin;
