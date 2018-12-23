/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
//!!!! ADD this "editor.formatOnSave": true in Visual Code Preferences to formate after save

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { withTestStore } from "@HOC";
import { enableLogging } from "mobx-logger";

enableLogging({
  predicate: () => __DEV__ && Boolean(window.navigator.userAgent),
  action: true,
  compute: true
});

@withTestStore
class App extends Component {
  render() {
    let { testStore } = this.props;
    // testStore.addItem();
    testStore.getUsers();
    console.log("Vava is ", testStore.total);
    return (
      <View style={styles.container}>
        <Text>MOBX SKELETON</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

export default App;
