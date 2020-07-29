import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "get_blogposts":
      return action.payload;
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          // title: `Blog Post # ${state.length + 1}`,
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case "edit_blogpost":
      return state.map((x) =>
        x.id === action.payload.id ? action.payload : x
      );
    case "delete_blogpost":
      return state.filter((blogPost) => blogPost.id !== action.payload);
    default:
      return state;
  }
};

const getBlogPosts = (dispatch) => {
  return async () => {
    const res = await jsonServer.get("/blogposts");
    dispatch({
      type: "get_blogposts",
      payload: res.data,
    });
  };
};

const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    await jsonServer.post("/blogposts", {
      title,
      content,
    });
    callback && callback();
    // dispatch({
    //   type: "add_blogpost",
    //   payload: {
    //     title,
    //     content,
    //   },
    // });
  };
};

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/blogposts/${id}`);
    dispatch({ type: "delete_blogpost", payload: id });
  };
  // return (id) => {
  //   dispatch({ type: "delete_blogpost", payload: id });
  // };
};

const editBlogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`/blogposts/${id}`, {
      title,
      content,
    });
    dispatch({
      type: "edit_blogpost",
      payload: {
        id,
        title,
        content,
      },
    });
    callback && callback();
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  {
    getBlogPosts,
    addBlogPost,
    deleteBlogPost,
    editBlogPost,
  },
  []
);
