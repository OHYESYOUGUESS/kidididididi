import React, { Component } from "react";
import { Layout, Card, Icon } from "antd";

const { Header, Footer, Sider, Content } = Layout;

class HeaderPC extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <Icon type="search" />
          <Icon type="compass" />
        </div>
      </React.Fragment>
    );
  }
}

export default HeaderPC;
