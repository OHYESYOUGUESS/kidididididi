import React from "react";
import { Form, Radio } from "semantic-ui-react";
import CommerceJoinForm from "../components/CommerceJoinForm";
import GeneralJoinForm from "../components/GeneralJoinForm";
export default class JoinForm extends React.Component {
  state = {
    value: "general"
  };
  handleChange = (e, { value }) => this.setState({ value });
  render() {
    return (
      <React.Fragment>
        <Form>
          <Form.Field>
            Selected value: <b>{this.state.value}</b>
          </Form.Field>
          <Form.Field>
            <Radio
              label="일반 사용자 회원 가입"
              name="radioGroup"
              value="general"
              checked={this.state.value === "general"}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label="관리자 회원 가입"
              name="radioGroup"
              value="commerce"
              checked={this.state.value === "commerce"}
              onChange={this.handleChange}
            />
          </Form.Field>
        </Form>
        {this.state.value === "commerce" ? (
          <CommerceJoinForm />
        ) : (
          <GeneralJoinForm />
        )}
      </React.Fragment>
    );
  }
}
