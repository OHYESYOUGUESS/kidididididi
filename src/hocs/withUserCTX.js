import React, { Component } from "react";
import { UserConsumer } from "../ctxs/UserCTX";

export default function withUserCTX(WrappedComponent) {
  return class extends Component {
    render() {
      return (
        <UserConsumer>
          {({ UserState, UserFunc }) => (
            <WrappedComponent
              UserState={UserState}
              UserFunc={UserFunc}
              {...this.props}
            />
          )}
        </UserConsumer>
      );
    }
  };
}
