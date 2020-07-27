import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text1}>1</Text>
      <Text style={styles.text2}>2</Text>
      <Text style={styles.text3}>3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    borderWidth: 3,
    borderColor: "#000",
    height: 200,
    flexDirection: "row",
    alignItems: "flex-end",
    margin: 10,
  },
  text1: {
    borderWidth: 3,
    padding: 20,
    borderColor: "red",
    flex: 1,
  },
  text2: {
    borderWidth: 3,
    padding: 20,
    borderColor: "red",
    alignSelf: "center",
    // flex:1,
    position: "absolute",
    ...StyleSheet.absoluteFillObject,
    // top:0,
    // left:0,
    // right:0,
    // bottom:0
  },
  text3: {
    borderWidth: 3,
    padding: 20,
    borderColor: "red",
    alignSelf: "flex-start",
    top: 30,
  },
});

export default BoxScreen;
