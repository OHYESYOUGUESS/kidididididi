import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import JoinPage from "./pages/JoinPage";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/join" component={JoinPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
