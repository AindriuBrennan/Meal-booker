import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FirebaseContext } from '../firebase';
import "./SignUp.css";

const initial_state = {
  username: "",
  email: "",
  password: ""
};

const SignUpPage = () => (
  <div>
    <h1>Sign Up Form</h1>
    <FirebaseContext.Consumer>
      {firebase => <SignUp firebase={firebase} />}
    </FirebaseContext.Consumer>
  </div>
);

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initial_state };
  }

  handleSubmit = event => {
    event.preventDefault();
    const{username, email, password} = this.state;

    this.props.firebase.signUpNewUserWithEmailAndPassword(email,password)
    .then(authUser => {
      this.setState({ ...initial_state});
    })
    .catch(error=>(console.log(error))) 
    
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { username, email, password } = this.state;

    return (
      <div className="SignUp">
       
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                name="username"
                value={username}
                onChange={this.handleChange}
                type="text"
                placeholder="Username"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                name="email"
                value={email}
                onChange={this.handleChange}
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
                onChange={this.handleChange}
                placeholder="Password"
              />
            </Form.Group>
            <Button type="submit">Submit </Button>
          </Form>
        
      </div>
    );
  }
}

export default SignUpPage;
