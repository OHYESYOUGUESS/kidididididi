import React, { Component } from "react";

import DetailContainerPC from "./DetailContainerPC";
import withCommentCTX from "../../hocs/withCommentCTX";
import withStoreCTX from "../../hocs/withStoreCTX";

var moment = require("moment");
class DetailContainerCC extends Component {
  state = {
    store: "",
    text: ""
  };

  componentDidMount = () => {
    let obj = this.props.StoreState.stores.filter(
      ele => ele.storeName === this.props.storeName
    )[0];
    console.log(obj);
    this.setState({ store: obj });
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
    console.log(this.state.text);
  };

  handleScore = v => {
    this.setState({ score: v });
    console.log(this.state.score);
  };

  handleCreate = () => {
    const obj = {
      id: parseInt(Math.random() * 1000000000000).toString(),
      score: this.state.score,
      userName: "joe",
      storeName: this.props.storeName,
      body: this.state.text,
      logDate: moment()
    };
    this.props.CommentFunc.Create("comments", obj);
  };

  render() {
    return (
      <DetailContainerPC
        {...this.props}
        onChange={this.handleChange}
        onCreate={this.handleCreate}
        onScore={this.handleScore}
        store={this.state.store}
      />
    );
  }
}

export default withStoreCTX(withCommentCTX(DetailContainerCC));
