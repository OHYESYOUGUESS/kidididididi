import React, { Component } from "react";
import { ReservationConsumer } from "../ctxs/ReservationCTX";

export default function withReservationCTX(WrappedComponent) {
  return class extends Component {
    render() {
      return (
        <ReservationConsumer>
          {({ ReservationState, ReservationFunc }) => (
            <WrappedComponent
              ReservationState={ReservationState}
              ReservationFunc={ReservationFunc}
              {...this.props}
            />
          )}
        </ReservationConsumer>
      );
    }
  };
}
