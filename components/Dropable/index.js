import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { observer } from "mobx-react";

@observer
export default class Dropable extends Component {
  render() {
    const { counter, counterStore } = this.props;

    return (
      <View style={styles.dropZone}>
        <Text style={styles.text}>Drop me here!({counterStore[counter]})</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dropZone: {
    width: "90%",
    height: "15%",
    backgroundColor: "#00334d",
    marginBottom: "5%",
    marginTop: "3%"
  },
  text: {
    marginTop: 25,
    marginLeft: 5,
    marginRight: 5,
    textAlign: "center",
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold"
  }
});
