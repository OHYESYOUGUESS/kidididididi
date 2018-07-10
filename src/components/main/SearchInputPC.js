import React, { Component } from "react";

class SearchInputPC extends Component {
  render() {
    return (
      <div class="ui icon input">
        <i class="search icon" />
        <input type="text" placeholder="Search..." />
      </div>
    );
  }
}

export default SearchInputPC;
