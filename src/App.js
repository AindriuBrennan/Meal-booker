import React from "react";
import "./App.css";
import Login from "./components/Login";
import Routes from "./Routes";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { IndexLinkContainer } from "react-router-bootstrap";

function App(props) {
  return (
    <div className="App">
      <Navbar>
        <Navbar.Brand>
          <Link to="/">Front Page</Link>
        </Navbar.Brand>
        <Nav className="m1-auto">
          <IndexLinkContainer to="/login">
            <NavItem>Login</NavItem>
          </IndexLinkContainer>
          
        </Nav>
      </Navbar>

      <Routes />
    </div>
  );
}

export default App;
