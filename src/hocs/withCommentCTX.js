import React, { Component } from "react";
import { CommentConsumer } from "../ctxs/CommentCTX";

export default function withCommentCTX(WrappedComponent) {
  return class extends Component {
    render() {
      return (
        <CommentConsumer>
          {({ CommentState, CommentFunc }) => (
            <WrappedComponent
              CommentState={CommentState}
              CommentFunc={CommentFunc}
              {...this.props}
            />
          )}
        </CommentConsumer>
      );
    }
  };
}
