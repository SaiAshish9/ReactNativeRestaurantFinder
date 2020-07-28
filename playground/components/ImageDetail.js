import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = ({ title, image }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Image source={image} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
