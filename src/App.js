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
import DetailPage from "./pages/DetailPage";
import MyPage from "./pages/MyPage";

// impagei from "./components/main/ContainerPC";

import { StoreProvider } from "./ctxs/StoreCTX";
import { CommentProvider } from "./ctxs/CommentCTX";
import { UserProvider } from "./ctxs/UserCTX";
import { ReservationProvider } from "./ctxs/ReservationCTX";

class App extends Component {
  render() {
    return (
      <Router>
        <StoreProvider>
          <CommentProvider>
            <UserProvider>
              <ReservationProvider>
                <Switch>
                  <Route exact path="/" component={DeepSearchCC} />
                  <Route path="/store" component={DetailPage} />
                  <Route path="/my" component={MyPage} />
                </Switch>
              </ReservationProvider>
            </UserProvider>
          </CommentProvider>
        </StoreProvider>
      </Router>
    );
  }
}

export default App;
