import React, { Component } from "react";

import DeepSearchPC from "./DeepSearchPC";
import withStoreCTX from "../../hocs/withStoreCTX";

class DeepSearchCC extends Component {
  render() {
    return <DeepSearchPC {...this.props} />;
  }
}

export default withStoreCTX(DeepSearchCC);
