import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import DeepSearchCC from "./components/main/DeepSearchCC";
// import ContainerPC from "./components/main/ContainerPC";

import { StoreProvider } from "./ctxs/StoreCTX";
import { CommentProvider } from "./ctxs/CommentCTX";

class App extends Component {
  render() {
    return (
      <Router>
        <StoreProvider>
          <CommentProvider>
            <Switch>
              <Route exact path="/" component={DeepSearchCC} />
            </Switch>
          </CommentProvider>
        </StoreProvider>
      </Router>
    );
  }
}

export default App;
