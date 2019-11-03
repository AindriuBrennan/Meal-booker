import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SignUp.css";

const initial_state = {
  username: "",
  email: "",
  password: ""
};

const signUpPage = () => (
  <div>
    <h1>Sign Up Form</h1>
  </div>
);

class signUp extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initial_state };
  }

  handleSubmit(event) {}

  render() {
    const { username, email, password } = this.state;

    return (
      <div className="SignUp">
        <Form>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              name="username"
              value={username}
              type="text"
              placeholder="Username"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              name="email"
              value={email}
              type="text"
              placeholder="Email Address"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              value={password}
              type={password}
              placeholder="Password"
            />
          </Form.Group>
          <Button type="submit">Submit </Button>
        </Form>
      </div>
    );
  }
}

export default signUp;
