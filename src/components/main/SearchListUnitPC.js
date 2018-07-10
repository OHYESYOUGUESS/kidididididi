import React, { Component } from "react";
import { Menu, Dropdown, Icon } from "antd";

class SearchListUnitPC extends Component {
  render() {
    return (
      <div>
        {this.props.StoreState.type === "cafe" ? (
          <Icon type="coffee" />
        ) : this.props.StoreState.type === "exp" ? (
          <Icon type="rocket" />
        ) : (
          <Icon type="apple" />
        )}
        <span>{this.props.storeName}</span>
        {this.props.StoreState.filter === "score" ? (
          <span>5.0</span>
        ) : this.props.StoreState.filter === "comment" ? (
          <span>100</span>
        ) : this.props.StoreState.filter === "rank" ? (
          <span>1st</span>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default SearchListUnitPC;
