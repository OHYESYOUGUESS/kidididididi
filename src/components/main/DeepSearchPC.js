import React, { Component } from "react";
import { Layout } from "antd";
import { Link } from "react-router-dom";

import SearchInputPC from "./SearchInputPC";
import SearchListUnitPC from "./SearchListUnitPC";
import CategoryDropdownPC from "./CategoryDropdownPC";
import FilterDropdownPC from "./FilterDropdownPC";
import FooterPC from "../layout/FooterPC";
import HeaderPC from "../layout/HeaderPC";

const { Header, Footer, Sider, Content } = Layout;
class DeapSearchPC extends Component {
  render() {
    return (
      <React.Fragment>
        <SearchInputPC {...this.props} />
        <CategoryDropdownPC {...this.props} />
        <FilterDropdownPC {...this.props} />
        <div>
          {this.props.StoreState.filtered.map(ele => {
            return (
              <Link to={`/store/${ele.storeName}`} key={ele.storeName}>
                <SearchListUnitPC {...this.props} store={{ ...ele }} />
              </Link>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default DeapSearchPC;
