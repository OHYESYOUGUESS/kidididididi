import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";

class CategoryDropdownPC extends Component {
  render() {
    const category = [
      { key: "Entire", text: "Entire", value: "entire" },
      { key: "Cafe", text: "Cafe", value: "cafe" },
      { key: "Food", text: "Food", value: "food" },
      { key: "Exprience", text: "Exprience", value: "exp" }
    ];
    return (
      <Dropdown placeholder="Category" search selection options={category} />
    );
  }
}

export default CategoryDropdownPC;
