import React, { Component } from "react";
import { Menu, Dropdown, Icon, Input, Button, InputNumber } from "antd";

class CommentPC extends Component {
  static defaultProps = {
    user: {
      username: "joe"
    }
  };

  render() {
    return (
      <React.Fragment>
        <Input placeholder="input" onChange={this.props.onChange} />
        <InputNumber
          min={1}
          max={5}
          defaultValue={5}
          onChange={this.props.onScore}
        />
        <Button onClick={this.props.onCreate}>submit</Button>
        {this.props.CommentState.comments
          .filter(e => e.storeId === this.props.storeID)
          .map(e => (
            <p key={e.id}>
              <span>{this.props.user.username}</span>
              <span>{e.body}</span>
              <span>{e.score}</span>
              <span>{e.logDate.format("YYYY.MM.DD hh:mm")}</span>
            </p>
          ))}
      </React.Fragment>
    );
  }
}

export default CommentPC;
