import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./components/login";
import SignUpPage from "./components/signUp";
import HomePage from "./components/homePage";
import SearchMealForm from "./components/searchMeal";
//import { routeros } from "react-syntax-highlighter/dist/styles/hljs";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/signup" exact component={SignUpPage} />
            <Route path="/searchmeal" exact component={SearchMealForm} />
            
        </Switch>
    );
}
