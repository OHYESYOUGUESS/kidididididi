import React from "react";
import { Form, Radio } from "semantic-ui-react";
export default class JoinForm extends React.Component {
  state = {
    value: null
  };
  handleChange = (e, { value }) => this.setState({ value });
  render() {
    return (
      <React.Component>
        <Form>
          <Form.Field>
            Selected value: <b>{this.state.value}</b>
          </Form.Field>
          <Form.Field>
            <Radio
              label="일반 사용자 가입"
              name="radioGroup"
              value="manager"
              checked={this.state.value === "manager"}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label="관리자 가입"
              name="radioGroup"
              value="user"
              checked={this.state.value === "user"}
              onChange={this.handleChange}
            />
          </Form.Field>
        </Form>
      </React.Component>
    );
  }
}
