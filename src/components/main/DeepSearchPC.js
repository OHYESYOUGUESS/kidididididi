import React, { Component } from "react";
import { Layout } from "antd";

import SearchInputPC from "./SearchInputPC";
import CategoryDropdownPC from "./CategoryDropdownPC";
import FilterDropdownPC from "./FilterDropdownPC";
import FooterPC from "../layout/FooterPC";
import HeaderPC from "../layout/HeaderPC";

const { Header, Footer, Sider, Content } = Layout;
class DeapSearchPC extends Component {
  render() {
    return (
      <Layout>
        <Header>
          <HeaderPC />
        </Header>
        <Content>
          <SearchInputPC />
          <CategoryDropdownPC />
          <FilterDropdownPC />
        </Content>
        <Footer>
          <FooterPC />
        </Footer>
      </Layout>
    );
  }
}

export default DeapSearchPC;
