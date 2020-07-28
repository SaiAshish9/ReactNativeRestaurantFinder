import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const { title, content } = state.find(
    (x) => x.id === navigation.getParam("id")
  );

  return (
    <BlogPostForm
      initialValues={{
        title,
        content,
      }}
      onSubmit={(title, content) => {
        console.log(title, content);
      }}
    />
  );
};

const styles = StyleSheet.create({
  label: {},
  input: {},
});

export default EditScreen;
