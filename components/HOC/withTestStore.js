import React, { Component } from "react";
import { observer } from "mobx-react";
import { TestStore } from "@stores";

export const withTestStore = WrappedComponent => {
  @observer
  class WithUser extends React.Component {
    render() {
      return <WrappedComponent testStore={TestStore} {...this.props} />;
    }
  }

  return WithUser;
};
