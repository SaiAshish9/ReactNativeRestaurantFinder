import React from "react";
import {
  View,
  ImageBackground,
  ScrollView,
  Dimensions,
  Animated,
} from "react-native";

const { width, height } = Dimensions.get("window");

const colors = ["orange", "white", "green"];

export default class Slideshow extends React.Component {
  scrollX = new Animated.Value(0);

  render() {
    let position = Animated.divide(this.scrollX, width);

    return (
      <View>
        <View>
          <ScrollView
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event([
              { nativeEvent: { contentOffset: { x: this.scrollX } } },
            ])}
            scrollEventThrottle={16}
          >
            {colors.map((x, i) => {
              return (
                <View
                  key={i}
                  style={{
                    zIndex: 10,
                    width,
                    height,
                    backgroundColor: x,
                  }}
                />
              );
            })}
          </ScrollView>
        </View>
        <View
          style={{
            flexDirection: "row",
            position: "absolute",
            margin: "auto",
            top: 40,
            left: width * 0.2,
          }}
        >
          {colors.map((_, i) => {
            let opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: "clamp",
            });
            return (
              <Animated.View
                key={i}
                style={{
                  opacity,
                  height: 10,
                  width: 50,
                  backgroundColor: "lightblue",
                  margin: 8,
                  borderRadius: 5,
                }}
              />
            );
          })}
        </View>
      </View>
    );
  }
}
