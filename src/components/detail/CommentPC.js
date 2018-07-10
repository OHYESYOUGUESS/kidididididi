import React, { Component } from "react";
import { Menu, Dropdown, Icon, Input, Button } from "antd";

class CommentPC extends Component {
  static defaultProps = {
    UserState: {
      currentName: "joe"
    }
  };

  render() {
    return (
      <React.Fragment>
        <Input placeholder="input" onchange={this.props.onChange} />
        <Button onclick={this.props.onCreate}>submit</Button>
      </React.Fragment>
    );
  }
}

export default CommentPC;
