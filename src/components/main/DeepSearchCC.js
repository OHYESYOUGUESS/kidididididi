import React, { Component } from "react";

import DeepSearchPC from "./DeepSearchPC";
class DeepSearchCC extends Component {
  state = {
    searchText: "",
    type: true,
    filt: true
  };

  handleChangeText = e => {
    this.setState({ searchText: e.target.value });
  };

  handleChangeType = e => {
    this.setState({ type: e.target.value });
  };

  handleChangeFilt = e => {
    this.setState({ filt: e.target.value });
  };

  render() {
    return <DeepSearchPC />;
  }
}

export default DeepSearchCC;
