import React from "react";
import { Text, View,Button } from "react-native";

const Counter = ({color,onIncrease,onDecrease}) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button
      onPress={onIncrease}
      title={`Increase ${color}`} />
      <Button 
      onPress={onDecrease}
      title={`Decrease ${color}`} />
    </View>
  );
};

export default Counter;
