import React from "react";
import "./App.css";
import Login from "./components/login";
import SignUp from "./components/signUp";
import SearchMealForm from "./components/searchMeal";
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
        <Nav className="justify-content-end">
          <IndexLinkContainer to="/login">
            <NavItem>Login</NavItem>
          </IndexLinkContainer>
          <IndexLinkContainer to="/signup">
          <NavItem>Sign Up</NavItem>
          </IndexLinkContainer>
          <IndexLinkContainer to="/searchmeal">
            <NavItem>Search</NavItem>
          </IndexLinkContainer>
        </Nav>
      </Navbar>

      <Routes />
    </div>
  );
}

export default App;
