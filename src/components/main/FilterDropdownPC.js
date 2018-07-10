import React, { Component } from "react";

class FilterDropdownPC extends Component {
  render() {
    return (
      <div class="ui floating dropdown labeled search icon button">
        <i class="dropdown icon" />
        <span class="text">Filter</span>
        <div class="menu">
          <div class="item" data-value="distance">
            Distance
          </div>
          <div class="item" data-value="score">
            Score
          </div>
          <div class="item" data-value="comment">
            Comment
          </div>
          <div class="item" data-value="ranking">
            Ranking
          </div>
        </div>
      </div>
    );
  }
}

export default FilterDropdownPC;
