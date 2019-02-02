import React, { Component } from "react";
import { StyleSheet, View, PanResponder, Animated, Text } from "react-native";

export default class Draggable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pan: new Animated.ValueXY(),
      showDraggable: true
    };
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        this.state.pan.setValue({ x: gestureState.dx, y: gestureState.dy });
      },
      onPanResponderRelease: (e, gestureState) => {
        //409-373 == 1
        //278-244 === 2
        //147 - 109 === 3
        const coordinateY = parseInt(gestureState.dy);
        this.drop(coordinateY);
      }
    });
  }

  drop = coordinate => {
    const { counterStore } = this.props;
    if (coordinate >= -409 && coordinate <= -373) {
      counterStore.incr("first");
      this.setState({
        showDraggable: false
      });
    } else if (coordinate >= -278 && coordinate <= -244) {
      counterStore.incr("second");
      this.setState({
        showDraggable: false
      });
    } else if (coordinate >= -147 && coordinate <= -109) {
      counterStore.incr("third");
      this.setState({
        showDraggable: false
      });
    } else {
      Animated.spring(this.state.pan, {
        toValue: { x: 0, y: 0 },
        friction: 50
      }).start();
    }
  };

  render() {
    const { showDraggable } = this.state;
    return (
      <>
        {showDraggable && (
          <Animated.View
            {...this.panResponder.panHandlers}
            style={[this.state.pan.getLayout(), styles.circle]}
          />
        )}
      </>
    );
  }
}

const CIRCLE_RADIUS = 30;
let styles = StyleSheet.create({
  circle: {
    backgroundColor: "skyblue",
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS
  }
});
