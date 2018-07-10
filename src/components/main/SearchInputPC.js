import React, { Component } from "react";
import { Input } from "antd";
// import { Search } from "antd";

class SearchInputPC extends Component {
  render() {
    return (
      <Input.Search
        placeholder="input search text"
        onSearch={value => console.log(value)}
        style={{ width: 200 }}
      />
    );
  }
}

export default SearchInputPC;
