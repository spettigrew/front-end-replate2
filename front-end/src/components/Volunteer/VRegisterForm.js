import React, {useEffect} from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const VolunteerRegister = () =>{

/*  useEffect(()=>{
    axios
    .get("https://dashboard.heroku.com/apps/replate2")
    .then(res =>{
      console.log(res);
    })
    .catch(err =>{
      console.log(err);
    })
  }) */

  useEffect(()=>{
    fetch('https://replate2.herokuapp.com/')
    .then(res => res.json())
    .then(json => console.log(json.message))
  })

  return (
    <div>
    <h1>Volunteer Registration Form</h1>
    <div className="volunteer-register-form">
    <Form>
    <p>
    Here at Replate2 we aim to put food on the plates of hungry people. If you're interested in becoming a volunteer to take food from restaurants to clients,
    sign up here!
    </p>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="exampleAddress">Address</Label>
        <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
      </FormGroup>
      <FormGroup>
        <Label for="exampleAddress2">Address 2</Label>
        <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor"/>
      </FormGroup>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleCity">City</Label>
            <Input type="text" name="city" id="exampleCity"/>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleState">State</Label>
            <Input type="text" name="state" id="exampleState"/>
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="exampleZip">Zip</Label>
            <Input type="text" name="zip" id="exampleZip"/>
          </FormGroup>
        </Col>
      </Row>
      <FormGroup check>
        <Input type="checkbox" name="check" id="exampleCheck"/>
        <Label for="exampleCheck" check>Check me out</Label>
      </FormGroup>
      <Button>Sign in</Button>
    </Form>
    </div>
    </div>
  );
}

export default VolunteerRegister;
