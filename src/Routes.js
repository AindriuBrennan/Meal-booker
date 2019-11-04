import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/login";
import SignUp from "./components/signUp";
import HomePage from "./components/homePage";
import SearchMealForm from "./components/searchMeal";
//import { routeros } from "react-syntax-highlighter/dist/styles/hljs";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/searchmeal" exact component={SearchMealForm} />
            
        </Switch>
    );
}
