import React, { Component } from "react";
import { Layout, InputNumber, Modal, Button } from "antd";
import { Link } from "react-router-dom";

const { Header, Footer, Sider, Content } = Layout;
class MyPC extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.user.manager && <h3>Manager</h3>}
        <p>{this.props.user.username}</p>
        <p>{this.props.user.account}</p>
        <Button onClick={this.props.onShow}>도토리 추가</Button>
        {this.props.ReservationState.reservations
          .filter(e => e.userName === this.props.user.username)
          .map(e => {
            return (
              <p>
                <span>{e.storeName}</span>
                <span>
                  {e.beginDate} ~ {e.dueDate}
                </span>
                <span>
                  {e.price}
                  won
                </span>
              </p>
            );
          })}

        <Modal
          title="도토리 추가"
          visible={this.props.visible}
          onOk={this.props.onOk}
          onCancel={this.props.onCancle}
        >
          <p>{parseInt(this.props.dotori * 0.9)} 원</p>
          <InputNumber
            min={5000}
            max={100000}
            defaultValue={5000}
            onChange={this.props.onDotori}
          />
          <span>도토리</span>
        </Modal>
      </React.Fragment>
    );
  }
}

export default MyPC;
