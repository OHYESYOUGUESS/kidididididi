import React, { Component } from "react";
import { Menu, Dropdown, Icon } from "antd";

import DetailInfoPC from "./DetailInfoPC";
import CommentPC from "./CommentPC";

class DetailContainerPC extends Component {
  render() {
    return (
      <React.Fragment>
        <DetailInfoPC {...this.props} />
        <CommentPC {...this.props} />
      </React.Fragment>
    );
  }
}

export default DetailContainerPC;
