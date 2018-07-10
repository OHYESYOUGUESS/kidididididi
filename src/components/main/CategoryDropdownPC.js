import React, { Component } from "react";
import { Menu, Dropdown, Icon } from "antd";

class CategoryDropdownPC extends Component {
  render() {
    const category = (
      <Menu>
        <Menu.Item key="entire">Entire</Menu.Item>
        <Menu.Item key="food">Food</Menu.Item>
        <Menu.Item key="cafe">Cafe</Menu.Item>
        <Menu.Item key="exp">Exprience</Menu.Item>
      </Menu>
    );

    return (
      <Dropdown overlay={category} trigger={["click"]}>
        <a className="ant-dropdown-link" href="#">
          Category <Icon type="down" />
        </a>
      </Dropdown>
    );
  }
}

export default CategoryDropdownPC;
