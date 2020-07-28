import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation }) => {
  const { state,editBlogPost } = useContext(Context);
  const { id,title, content } = state.find(
    (x) => x.id === navigation.getParam("id")
  );

  return (
    <BlogPostForm
      initialValues={{
        title,
        content,
      }}
      onSubmit={(title, content) => {
          editBlogPost(id,title, content,()=>navigation.pop())
        // console.log(title, content);
      }}
    />
  );
};

const styles = StyleSheet.create({
  label: {},
  input: {},
});

export default EditScreen;
