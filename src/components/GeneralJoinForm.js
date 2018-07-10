import React from "react";

export default class GeneralJoinForm extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    const username = this.usernameRef.current.value;
    const password = this.passwordRef.current.value;
    console.log(username, password);
  };

  usernameRef = React.createRef();
  passwordRef = React.createRef();
  render() {
    const { username, password } = this.state;
    return (
      <React.Fragment>
        <label>username</label>
        <input
          placeholder="username"
          type="username"
          ref={this.username}
          required
        />

        <label>password</label>
        <input
          type="password"
          placeholder="password"
          type="password"
          ref={this.password}
          required
        />

        <button type="submit">Submit</button>
      </React.Fragment>
    );
  }
}
