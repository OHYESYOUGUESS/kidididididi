import React, { Component } from "react";

import BannerPC from "./BannerPC";
import CategoryPC from "./CategoryPC";
import ThemePC from "./ThemePC";

class ContainerPC extends Component {
  render() {
    return (
      <div class="ui container">
        <BannerPC />
        <CategoryPC />
        <ThemePC />
      </div>
    );
  }
}

export default ContainerPC;
