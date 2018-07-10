import React, { Component } from "react";
import { Menu, Dropdown, Icon } from "antd";

class FilterDropdownPC extends Component {
  render() {
    const filter = (
      <Menu>
        <Menu.Item key="distance">Distance</Menu.Item>
        <Menu.Item key="score">Score</Menu.Item>
        <Menu.Item key="comment">Comment</Menu.Item>
        <Menu.Item key="ranking">Ranking</Menu.Item>
      </Menu>
    );

    return (
      <Dropdown overlay={filter} trigger={["click"]}>
        <a className="ant-dropdown-link" href="#">
          Filter <Icon type="down" />
        </a>
      </Dropdown>
    );
  }
}

export default FilterDropdownPC;
