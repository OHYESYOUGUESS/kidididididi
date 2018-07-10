import React, { Component } from "react";
import { Menu, Dropdown, Icon } from "antd";

class FilterDropdownPC extends Component {
  static defaultProps = {};

  render() {
    const filter = (
      <Menu>
        <Menu.Item
          onClick={() => {
            this.props.StoreFunc.filterChange("score");
          }}
        >
          score
        </Menu.Item>
        <Menu.Item
          onClick={() => {
            this.props.StoreFunc.filterChange("comment");
          }}
        >
          comment
        </Menu.Item>
        <Menu.Item
          onClick={() => {
            this.props.StoreFunc.filterChange("rank");
          }}
        >
          rank
        </Menu.Item>
      </Menu>
    );

    return (
      <Dropdown.Button overlay={filter} trigger={["click"]}>
        {this.props.StoreState.filter}
      </Dropdown.Button>
    );
  }
}

export default FilterDropdownPC;
