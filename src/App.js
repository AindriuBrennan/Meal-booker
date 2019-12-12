import React from "react";
import "./App.css";
import Login from "./components/login";
import SignUp from "./components/signUp";
import SearchMealForm from "./components/searchMeal";
import Routes from "./Routes";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { IndexLinkContainer } from "react-router-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import * as api from './api';
import { Redirect } from 'react-router-dom';

function App(props) {
  return (
    <div className="App">
      <Navbar>
        <Navbar.Brand>
          <Link to="/">Front Page</Link>
        </Navbar.Brand>
        <Nav>
          <IndexLinkContainer to="/login">
            <NavItem>Firebase Login</NavItem>
          </IndexLinkContainer>
          <IndexLinkContainer to="/signup">
            <NavItem>Sign Up</NavItem>
          </IndexLinkContainer>

          <IndexLinkContainer to="/searchmeal">
            <NavItem>Search</NavItem>
          </IndexLinkContainer>
          <IndexLinkContainer to="/userbookings">
            <NavItem>Bookings</NavItem>
          </IndexLinkContainer>
          <IndexLinkContainer to="/expresslogin">
            <NavItem>Custom Login </NavItem>
          </IndexLinkContainer>
        </Nav>
      </Navbar>

      <Routes />
    </div>
  );
}

export default App;
