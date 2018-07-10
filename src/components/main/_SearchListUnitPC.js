import React, { Component } from "react";

class SearchListUnitPC extends Component {
  static defaultProps = {
    category: "cafe",
    filter: "ranking",
    storeState: {
      storeName: "store"
    }
  };
  render() {
    return (
      <div class="ui icon input">
        {this.props.category === "cafe" ? (
          <i class="coffee icon" />
        ) : this.props.category === "exp" ? (
          <i class="university icon" />
        ) : (
          <i class="utensils icon" />
        )}
        <span>{this.props.storeState.storeName}</span>
        {this.props.filter === "distance" ? (
          <span>100m</span>
        ) : this.props.filter === "score" ? (
          <span>5.0</span>
        ) : this.props.filter === "comment" ? (
          <span>100</span>
        ) : this.props.filter === "ranking" ? (
          <span>1st</span>
        ) : (
          ""
        )}
        }
      </div>
    );
  }
}

export default SearchListUnitPC;
