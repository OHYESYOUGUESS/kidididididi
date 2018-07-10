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
      ele => ele.id === this.props.storeID
    )[0];
    this.setState({ store: obj });
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleCreate = () => {
    const obj = {
      id: parseInt(Math.random() * 1000000000000).toString(),
      score: "5",
      userId: "582400634055",
      storeId: this.props.storeID,
      body: "good",
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
        store={this.state.store}
      />
    );
  }
}

export default withStoreCTX(withCommentCTX(DetailContainerCC));
