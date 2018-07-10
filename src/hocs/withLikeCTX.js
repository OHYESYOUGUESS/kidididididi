import React, { Component } from "react";
import { LikeConsumer } from "../ctxs/LikeCTX";

export default function withLikeCTX(WrappedComponent) {
  return class extends Component {
    render() {
      return (
        <LikeConsumer>
          {({ LikeState, LikeFunc }) => (
            <WrappedComponent
              LikeState={LikeState}
              LikeFunc={LikeFunc}
              {...this.props}
            />
          )}
        </LikeConsumer>
      );
    }
  };
}
