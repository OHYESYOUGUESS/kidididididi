import React, { Component } from "react";
import { Menu, Dropdown, Icon } from "antd";

class DetailInfoPC extends Component {
  render() {
    return (
      <React.Fragment>
        {() => {
          switch (this.props.store.type) {
            case "food":
              return <Icon type="apple" />;
            case "cafe":
              return <Icon type="coffee" />;
            case "exp":
              return <Icon type="rocket" />;
            default:
              break;
          }
        }}
        <h2>{this.props.store.storeName}</h2>
        <p>{this.props.store.body}</p>
        <p>{this.props.store.address}</p>
        <p>{this.props.store.phone}</p>
        <p>
          {this.props.store.openTime}~{this.props.store.closeTime}
        </p>
      </React.Fragment>
    );
  }
}

export default DetailInfoPC;
