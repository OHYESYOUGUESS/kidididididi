import React, { Component } from "react";

import MyPC from "./MyPC";
import withUserCTX from "../../hocs/withUserCTX";
import withReservationCTX from "../../hocs/withReservationCTX";

class MyCC extends Component {
  state = {
    user: "",
    visible: false,
    dotori: 5000
  };

  componentDidMount = () => {
    let arr = this.props.UserState.users.slice();
    let obj = arr.filter(e => e.username === this.props.userName)[0];
    console.log(obj);
    this.setState({ user: obj });
    console.log(this.state);
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    this.props.UserFunc.Update(
      "users",
      this.state.user.username,
      "account",
      this.state.user.account + this.state.dotori
    );

    this.setState({
      visible: false,
      user: {
        ...this.state.user,
        account: this.state.user.account + this.state.dotori
      }
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleDotoriChange = v => {
    this.setState({ dotori: v });
  };

  render() {
    return (
      <MyPC
        {...this.props}
        {...this.state}
        user={this.state.user}
        onShow={this.showModal}
        onOk={this.handleOk}
        onCancle={this.handleCancel}
        onDotori={this.handleDotoriChange}
      />
    );
  }
}

export default withReservationCTX(withUserCTX(MyCC));
