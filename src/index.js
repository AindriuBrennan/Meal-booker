import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import HomePage from "./components/homePage";
import Routes from "./Routes";
import Firebase, { FirebaseContext } from "./components/firebase";

ReactDOM.render(
  <Router>
    <FirebaseContext.Provider value ={new Firebase()}>
    <App />
    </FirebaseContext.Provider>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
