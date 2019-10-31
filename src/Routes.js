import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/login";
//import { routeros } from "react-syntax-highlighter/dist/styles/hljs";

export default function Routes() {
    return(
        <Switch>
            <Route path="/" exact componen={Login} />
        </Switch>
    )
}
