// import React from 'react';

// import { View, TouchableHighlight, StyleSheet, Image } from 'react-native';

// const Btn = ({ children, skew }) => (
//   <View style={skew ? styles.borderBox1 : styles.borderBox}>
//     <TouchableHighlight>
//       <View style={styles.btn}>{children}</View>
//     </TouchableHighlight>
//   </View>
// );

// const styles = StyleSheet.create({
//   btn: {
//     // padding: 9,
//     width: "2.3rem",
//     height: "2rem",
//     textAlign: "center",
//     backgroundColor: "#2a2b38",
//     borderRadius: 10,
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   borderBox: {
//     // backgroundColor: 'linear-gradient(309.26deg, #865CF4 0%, #C01C8A 100%)',
//     backgroundColor: "#000",
//     boxSizing: "border-box",
//     borderRadius: 10,
//     height: "2.2rem",
//     width: "2.46rem",
//     padding: 1.5,
//   },
//   borderBox1: {
//     // backgroundColor: 'linear-gradient(309.26deg, #865CF4 0%, #C01C8A 100%)',
//     backgroundColor: "#000",

//     boxSizing: "border-box",
//     borderRadius: 10,
//     width: "2.46rem",
//     transform: "skew(-10deg)",
//     padding: 1.5,
//   },
// });

// export default Btn;
















import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";
import SkewableView from "react-native-skewable-view/SkewableView";
import Canvas from "./canvas"
import {SvgXml,SvgCss} from 'react-native-svg'

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost, getBlogPosts } = useContext(BlogContext);

  useEffect(() => {
    getBlogPosts();
    const listener = navigation.addListener("didFocus", () => {
      getBlogPosts();
    });

    return () => {
      listener.remove();
    };
  }, []);


const xml = `
<?xml version="1.0" encoding="UTF-8"?>
<svg width="80px" height="40px" viewBox="0 0 36 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>Group</title>
    <defs>
        <path d="M14.1083237,0.342516185 L35.3478995,0.342516185 L35.3478995,0.342516185 L34.7052562,8.76114434 C34.3073597,13.9735875 29.9618732,18 24.7342653,18 L0.85546875,18 L0.85546875,18 L4.66382016,7.05597503 C6.06258391,3.03636031 9.8522877,0.342516185 14.1083237,0.342516185 Z" id="path-1"></path>
        <linearGradient x1="17.5455729%" y1="40.0743391%" x2="89.0082465%" y2="59.9256609%" id="linearGradient-3">
            <stop stop-color="#BD40B9" offset="0%"></stop>
            <stop stop-color="#9E5EE1" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="bg" transform="translate(-109.000000, -165.000000)">
            <g id="Group" transform="translate(109.000000, 165.000000)">
                <mask id="mask-2" fill="white">
                    <use xlink:href="#path-1"></use>
                </mask>
                <g id="Mask" opacity="0.119768415"></g>
                <path d="M15.6276494,6.72157597 L36,5.09082031 L36,5.09082031 L36,18.0117188 L7,18.0117188 L10.6713131,10.1608319 C11.58507,8.20681645 13.4774162,6.89369675 15.6276494,6.72157597 Z" id="Rectangle" fill="url(#linearGradient-3)" mask="url(#mask-2)"></path>
            </g>
        </g>
    </g>
</svg>
`;


  return (
    <View style={{ marginBottom: 50,padding:40 }}>
<Canvas/>

<SvgXml
width={70}
xml={xml}
height={40}
/>

      <FlatList
        data={state}
        keyExtractor={(x) => x.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Show", { id: item.id });
              }}
            >
              <View style={styles.row}>
                <Text style={styles.text}>
                  {item.title} - {item.id}{" "}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather name="trash" style={styles.icon} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <View
        style={{
          transform: [
            // {
            //   rotate:'180deg'
            // }
          ],
        }}
      >
        <View
          style={{
            height: 30,
            width: 50,
            backgroundColorColor: "#000",
            borderRadius: 10,
            margin: 60,
            transform: [
              // {translateX:50},
              // {scale:0.8},
              {
                skewX: Math.PI / 6,
              },
              {
                rotateY: "90deg",
              },
            ],
          }}
        />
      </View>

      <View
        style={{
          boxSizing: "border-box",
          borderRadius: 30,
          // borderColor:'#555',
          // borderWidth: 1,
        }}
      >
        <SkewableView
          style={{
            position: "absolute",
            margin: 70,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 30,
            borderBottomLeftRadius: 20,
            overflow: "hidden",
            borderColor: "#000",
            borderWidth: 2,
            padding: 0,
          }}
          skewDirection={"horizontal-right"}
          skewValue={25}
          skewUnits={"deg"}
          boundingBoxHeight={50}
          boundingBoxWidth={70}
          backgroundColorColor={"#ff0000"}
        ></SkewableView>
      </View>
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Create");
        }}
      >
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: "gray",
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});

export default IndexScreen;
