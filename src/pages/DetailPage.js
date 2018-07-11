import React, { Component } from "react";

import DetailContainerCC from "../components/detail/DetailContainerCC";
import { Route } from "react-router-dom";

class DetailPage extends Component {
  render() {
    return (
      <Route
        path="/store/:name"
        render={({ match }) => {
          console.log("detail cc render");
          return (
            <DetailContainerCC storeName={match.params.name} {...this.props} />
          );
        }}
      />
    );
  }
}

export default DetailPage;
