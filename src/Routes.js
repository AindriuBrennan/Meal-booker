import React from "react";
import { Route, Switch } from "react-router-dom";
import login from "./components/login";
import signUp from "./components/signUp";
import homePage from "./components/homePage";
import searchMealForm from "./components/searchMeal";
//import { routeros } from "react-syntax-highlighter/dist/styles/hljs";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={homePage} />
            <Route path="/login" exact component={login} />
            <Route path="/signup" exact component={signUp} />
            <Route path="/searchmeal" exact compoenent={searchMealForm} />
            
        </Switch>
    );
}
