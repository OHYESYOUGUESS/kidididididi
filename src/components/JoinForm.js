import React from "react";
import { Radio } from "antd";
import CommerceJoinForm from "../components/CommerceJoinForm";
import GeneralJoinForm from "../components/GeneralJoinForm";

const RadioGroup = Radio.Group;

export default class JoinForm extends React.Component {
  state = {
    value: "general"
  };
  handleChange = (e, { value }) => this.setState({ value });
  render() {
    return (
      <React.Fragment>
        Selected value: <b>{this.state.value}</b>
        <Radio
          label="일반 사용자 회원 가입"
          name="radioGroup"
          value="general"
          checked={this.state.value === "general"}
          onChange={this.handleChange}
        />
        <Radio
          label="관리자 회원 가입"
          name="radioGroup"
          value="commerce"
          checked={this.state.value === "commerce"}
          onChange={this.handleChange}
        />
        {this.state.value === "commerce" ? (
          <CommerceJoinForm />
        ) : (
          <GeneralJoinForm />
        )}
      </React.Fragment>
    );
  }
}
