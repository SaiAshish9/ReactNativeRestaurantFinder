import React from "react";

import { Text, View, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    {
      name: "sai",
    },
    {
      name: "sai1",
    },
    {
      name: "sai2",
    },
    {
      name: "sai3",
    },
    {
      name: "sai4",
    },
    {
      name: "sai5",
    },
    {
      name: "sai6",
    },
    {
      name: "sai7",
    },
    {
      name: "sai8",
    },
    {
      name: "sai9",
    },
  ];
// {,key} 
//   android-non-scrollable
//   ios -scrollable

  return (
  <FlatList
  horizontal
  showsHorizontalScrollIndicator={false}
  keyExtractor={(friend)=>friend.name}
  data={friends}
  renderItem={
      ({item}) =>{
         return <Text
         style={styles.textStyle}
         >{item.name}</Text>
      }
  }
  />)
};

const styles = StyleSheet.create({
  textStyle:{
    marginVertical:50,
    marginHorizontal:30
  }
});

export default ListScreen;
