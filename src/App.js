import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
