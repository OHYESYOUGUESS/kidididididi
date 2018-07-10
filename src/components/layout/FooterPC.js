import React, { Component } from "react";
import { Layout, Card } from "antd";

const { Header, Footer, Sider, Content } = Layout;

class FooterPC extends Component {
  render() {
    return (
      <React.Fragment>
        <div>Home</div>

        <div>Recomment</div>

        <div>Event</div>

        <div>News</div>

        <div>My</div>
      </React.Fragment>
    );
  }
}

export default FooterPC;
