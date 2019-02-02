import React, { Component } from "react";
import { observer } from "mobx-react";
import { CounterStore } from "@stores";

export const withCounterStore = WrappedComponent => {
  @observer
  class WithCounter extends React.Component {
    render() {
      return <WrappedComponent counterStore={CounterStore} {...this.props} />;
    }
  }

  return WithCounter;
};
