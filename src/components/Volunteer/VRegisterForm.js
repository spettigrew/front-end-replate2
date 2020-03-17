import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import "../../css/VolunteerRegisterApp.css";

const VolunteerRegister = props => {
 // initialState
 const history = useHistory()

 const [register, setRegister] = useState({
  username: "",
  password: "",
  name: "",
  phone: 0
 });

 // set register
 const volunteerRegisterForm = e => {
  console.log(register, "register");
  e.preventDefault();
  axios
   .post("https://replate2.herokuapp.com/api/volunteers/register", register)
   .then(res => {
  history.push("/register");
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
   <h1>Volunteer Registration Form</h1>
   <p>
    If you're interested in becoming a volunteer for Replate, please fill out
    the form below.
   </p>
   <div className="volunteer-register-form">
    <Form onSubmit={volunteerRegisterForm}>
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
     <Button>Sign Up</Button>
    </Form>
   </div>
  </div>
 );
};

export default VolunteerRegister;
