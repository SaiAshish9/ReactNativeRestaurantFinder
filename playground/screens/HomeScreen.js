import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        title="Components"
        onPress={() => {
          navigation.navigate("Components");
        }}
      />
      <Button
        title="Image"
        onPress={() => {
          navigation.navigate("Image");
        }}
      />
      <Button
        title="Counter"
        onPress={() => {
          navigation.navigate("Counter");
        }}
      />
      <Button
        title="Color"
        onPress={() => {
          navigation.navigate("Color");
        }}
      />
      <Button
        title="Square"
        onPress={() => {
          navigation.navigate("Square");
        }}
      />
      <Button
        title="TextInput"
        onPress={() => {
          navigation.navigate("TextInput");
        }}
      />
      <Button
        title="Box"
        onPress={() => {
          navigation.navigate("Box");
        }}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("List");
        }}
      >
        <Text>List</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
