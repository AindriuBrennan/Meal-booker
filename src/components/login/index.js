import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { withFirebase } from "../firebase";
import { Form } from "react-bootstrap";
import "./Login.css";

const LoginPage = () => (
  <div>
    <h1>Login</h1>
    <Login />
  </div>
);

const initial_state = {
  email: "",
  password: ""
};

class LoginStandard extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initial_state };
  }

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;

    this.props.firebase
      .loginExistingUserWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...initial_state });
        this.props.history.push("/searchmeal");
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <React.Fragment>
        <div className="background">
          <div className="heading">
            <h1>Login page</h1>
            <p>Enter your details</p>
          </div>

          <div className="login">
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name="email"
                  type="text"
                  value={email}
                  placeholder="Enter email"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  value={password}
                  placeholder="Password"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Button type="submit">Submit</Button>
            </Form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const Login = withRouter(withFirebase(LoginStandard));

export default LoginPage;

export { Login };
