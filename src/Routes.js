import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
//import { routeros } from "react-syntax-highlighter/dist/styles/hljs";

export default function Routes() {
    return(
        <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/login" exact component={Login} />
        </Switch>
    )
}
