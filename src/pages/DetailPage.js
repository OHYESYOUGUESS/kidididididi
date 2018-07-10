import React, { Component } from "react";

import DetailContainerCC from "../components/detail/DetailContainerCC";
import { Route } from "react-router-dom";

class DetailPage extends Component {
  render() {
    return (
      <Route
        path="/store/:id"
        render={({ match }) => {
          <DetailContainerCC
            storeID={parseInt(match.params.id)}
            {...this.props}
          />;
        }}
      />
    );
  }
}

export default DetailPage;
