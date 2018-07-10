import React, { Component } from "react";
import { StoreConsumer } from "../ctxs/StoreCTX";

export default function withStoreCTX(WrappedComponent) {
  return class extends Component {
    render() {
      return (
        <StoreConsumer>
          {({ StoreState, StoreFunc }) => (
            <WrappedComponent
              StoreState={StoreState}
              StoreFunc={StoreFunc}
              {...this.props}
            />
          )}
        </StoreConsumer>
      );
    }
  };
}
