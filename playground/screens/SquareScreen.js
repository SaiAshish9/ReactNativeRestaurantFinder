import React, { useState, useReducer } from "react";
import { Text, View, Button } from "react-native";
import Counter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "red":
        if (state.red + action.payload > 255 || state.red + action.payload < 0) {
          return state;
        }
        return {
          ...state,
          red: state.red + action.payload,
        };
      case "green":
        if (
          state.green + action.payload > 255 ||
          state.green + action.payload < 0
        ) {
          return state;
        }
        return {
          ...state,
          green: state.green + action.payload,
        };
      case "blue":
        if (
          state.blue + action.payload > 255 ||
          state.blue + action.payload < 0
        ) {
          return state;
        }
        return {
          ...state,
          blue: state.blue + action.payload,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0,
  });

  return (
    <View>
      <Counter
        onIncrease={() => {
          dispatch({
            type: "red",
            payload: COLOR_INCREMENT,
          });
        }}
        onDecrease={() => {
          dispatch({
            type: "red",
            payload: -1 * COLOR_INCREMENT,
          });
        }}
        color="Red"
      />
      <Counter
        onIncrease={() => {
          dispatch({
            type: "green",
            payload: COLOR_INCREMENT,
          });
        }}
        onDecrease={() => {
          dispatch({
            type: "green",
            payload: -1 * COLOR_INCREMENT,
          });
        }}
        color="Green"
      />
      <Counter
        onIncrease={() => {
          dispatch({
            type: "blue",
            payload: COLOR_INCREMENT,
          });
        }}
        onDecrease={() => {
          dispatch({
            type: "blue",
            payload: -1 * COLOR_INCREMENT,
          });
        }}
        color="Blue"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${state.red},${state.green},${state.blue})`,
        }}
      />
    </View>
  );
};

export default SquareScreen;
