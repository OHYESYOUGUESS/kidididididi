import React, { Component } from "react";

import SearchInputPC from "./SearchInputPC";
import CategoryDropdownPC from "./CategoryDropdownPC";
import FilterDropdownPC from "./FilterDropdownPC";
import SearchListUnitPC from "./SearchListUnitPC";

class DeapSearchPC extends Component {
  render() {
    return (
      <div class="ui container">
        <SearchInputPC />
        <CategoryDropdownPC />
        <FilterDropdownPC />
        <SearchListUnitPC />
      </div>
    );
  }
}

export default DeapSearchPC;
