import React, { Component } from "react";
import { Menu, Dropdown, Icon } from "antd";

class CategoryDropdownPC extends Component {
  render() {
    const category = (
      <Menu>
        <Menu.Item
          onClick={() => {
            this.props.StoreFunc.typeChange("entire");
          }}
        >
          Entire
        </Menu.Item>
        <Menu.Item
          onClick={() => {
            this.props.StoreFunc.typeChange("food");
          }}
        >
          Food
        </Menu.Item>
        <Menu.Item
          onClick={() => {
            this.props.StoreFunc.typeChange("cafe");
          }}
        >
          Cafe
        </Menu.Item>

        <Menu.Item
          onClick={() => {
            this.props.StoreFunc.typeChange("exp");
          }}
        >
          Exprience
        </Menu.Item>
      </Menu>
    );

    return (
      <Dropdown.Button overlay={category} trigger={["click"]}>
        {this.props.StoreState.type}
      </Dropdown.Button>
    );
  }
}

export default CategoryDropdownPC;
