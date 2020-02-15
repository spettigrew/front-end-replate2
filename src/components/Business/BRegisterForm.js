import React, { useState } from "react";
import axios from "axios";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import "../../css/BusinessRegisterApp.css";

const BusinessRegister = props => {
 // initialState

 const [register, setRegister] = useState({
  username: "",
  password: "",
  name: "",
  address: "",
  phone: "",
  email: ""
 });

 // set register
 const businessRegisterForm = e => {
  e.preventDefault();
  axios
   .post("https://replate2.herokuapp.com/api/businesses/register", register)
   .then(res => {
    console.log(res.data);
    console.log(props.history);
    props.history.push("/businesses/login");
   })
   .catch(err => console.log(err));
 };

 //change handler
 const handleChange = e => {
  setRegister({
   ...register,
   [e.target.name]: e.target.value
  });
 };

 return (
  <div>
   <h1>Business Registration Form</h1>
   <p>
    If your business is interested in donating to Replate, please fill out the
    form below.
   </p>
   <div className="business-register-form">
    <Form onSubmit={businessRegisterForm}>
     <Row form>
      <Col md={6}>
       <FormGroup>
        <Label for="exampleUsername">Username</Label>
        <Input
         type="text"
         name="username"
         id="username"
         placeholder="username"
         onChange={handleChange}
        />
       </FormGroup>
      </Col>
      <Col md={6}>
       <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
         type="password"
         name="password"
         id="examplePassword"
         placeholder="password"
         onChange={handleChange}
        />
       </FormGroup>
      </Col>
     </Row>
     <FormGroup>
      <Label for="exampleName">Name</Label>
      <Input
       type="text"
       name="name"
       id="exampleName"
       placeholder="name"
       onChange={handleChange}
      />
     </FormGroup>
     <FormGroup>
      <Label for="examplePhone">Phone</Label>
      <Input
       type="text"
       name="phone"
       id="examplePhone"
       placeholder="555-555-5555"
       onChange={handleChange}
      />
     </FormGroup>
     <FormGroup>
      <Label for="examplePhone">Address</Label>
      <Input
       type="text"
       name="address"
       id="exampleAddress"
       placeholder="enter address"
       onChange={handleChange}
      />
     </FormGroup>
     <FormGroup>
      <Label for="examplePhone">Email</Label>
      <Input
       type="email"
       name="email"
       id="exampleEmail"
       placeholder="email@email.com"
       onChange={handleChange}
      />
     </FormGroup>
     <Button>Sign Up</Button>
    </Form>
   </div>
  </div>
 );
};

export default BusinessRegister;
