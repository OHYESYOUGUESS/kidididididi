import React, { Component } from "react";

import MyCC from "../components/my/MyCC";
import { Route } from "react-router-dom";

class MyPage extends Component {
  render() {
    return (
      <Route
        path="/my/:name"
        render={({ match }) => {
          console.log("welcome joe");
          return <MyCC userName={match.params.name} {...this.props} />;
        }}
      />
    );
  }
}

export default MyPage;
