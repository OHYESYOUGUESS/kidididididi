import React from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";

export default class GeneralJoinForm extends React.Component {
  state = {
    username: "",
    password: ""
  };
  handleChange = e => {
    const { name, value } = e.target;
    console.log(name, value);
    this.setState({
      name: value
    });
  };
  handleSubmit = () => {
    const { username, password } = this.state;
    // join(username, password)
    console.log(username, password);
  };
  render() {
    const { username, password } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form>
          <label>username</label>
          <input
            placeholder="username"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
        </Form>
        <Form>
          <label>password</label>
          <input
            type="password"
            placeholder="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </Form>

        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}
