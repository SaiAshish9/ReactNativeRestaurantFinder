import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Search", {
            name: "Beach",
          });
        }}
      >
        <ImageDetail
          title={"beach"}
          image={require("../../assets/images/forest.jpg")}
        />
      </TouchableOpacity>

      <ImageDetail
        title={"forest"}
        image={require("../../assets/images/beach.jpg")}
      />
      <ImageDetail
        title={"mountain"}
        image={require("../../assets/images/mountain.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default withNavigation(ImageScreen);
