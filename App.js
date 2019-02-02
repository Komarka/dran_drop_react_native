/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

//react-native
import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

//components
import Draggable from "@components/Draggable";
import Dropable from "@components/Dropable";

//HOC
import { withCounterStore } from "@HOC";

@withCounterStore
export default class App extends Component {
  counters = ["first", "second", "third"];

  createDropables = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      result.push(
        <Dropable key={i} counter={this.counters[i]} {...this.props} />
      );
    }
    return result;
  };

  createDraggables = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      result.push(<Draggable key={i} {...this.props} />);
    }
    return result;
  };

  render() {
    return (
      <View style={styles.container}>
        {this.createDropables()}
        <View style={styles.draggableContainer}>{this.createDraggables()}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  draggableContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "7%"
  }
});
