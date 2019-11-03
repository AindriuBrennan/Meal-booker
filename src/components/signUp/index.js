import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./signUp.css";

const initial_state = {
  username: "",
  email: "",
  password: ""
};

class signUp extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initial_state };
  }

  handleSubmit(event) {
    
  }


  render() {
    const { username, email, password } = this.state;

    return (

      <div classname="signUp">
         
        <Form>
            <Form.Group controlId="formUsername">
          <Form.Control
            name="username"
            value={username}
            type="text"
            placeholder="Username"
          />
          </Form.Group>
            <Form.Group>
          <Form.Control
            name="email"
            value={email}
            type="text"
            placeholder="Email Address"
          />
          </Form.Group>
          <Form.Group>
          <Form.Control
            name="password"
            value={password}
            type={password}
            placeholder="Password"
          />
          </Form.Group>
          <button type="submit">Submit </button>
        </Form>
      </div>
    );
  }
}

export default signUp;
