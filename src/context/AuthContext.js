import createDataContext from "./createDataContext";
import trackApi from "../api/tracker";
import { AsyncStorage } from "react-native";
// @react-native-community/async-storage

import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return {
        ...state,
        errorMessage: action.payload,
      };
    case "signin":
      return { errorMessage: "", token: action.payload };
    case "clear_error_message":
      return { ...state, errorMessage: "" };
    default:
      return state;
  }
};


const tryLocalSignin=dispatch=>async ()=>{
    const token=await AsyncStorage.getItem('token')
    i(token){
      dispatch({type:'sigin',payload:token})
      navigate('TrackList')
    }else{
      navigate('loginFlow')
    }
}

// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZjI1OTUwYzQ5ZGQ4MzBlZTg3ODAwMzciLCJpYXQiOjE1OTYyOTg1MTJ9.LNNnw-hEfC-DKECVZe56C8VEO1VQX5S1aHjSg-Fw-dU";

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "clear_error_message" });
};

const signup = (dispatch) => async ({ email, password }, callback) => {
  try {
    const res = await trackApi.post("/signup", {
      email,
      password,
    });
    await AsyncStorage.setItem("token", res.data.token);
    dispatch({
      type: "signin",
      payload: res.data.token,
    });
    navigate("TrackList");
  } catch (e) {
    dispatch({
      type: "add_error",
      payload: "Something went wrong with sign up",
    });
  }
};

const signin = (dispatch) => async ({ email, password }) => {
  try {
    const res = await trackApi.post("/signin", { email, password });
    await AsyncStorage.setItem("token", res.data.token);
    dispatch({
      type: "signin",
      payload: res.data.token,
    });
    navigate("TrackList");
  } catch (err) {
    dispatch({
      type: "add_error",
      payload: "Something went wrong with sign in",
    });
  }
};

const signout = (dispatch) => {
  return () => {};
};

export const { Provider, Context } = createDataContext(
  authReducer,
  {
    signup,
    signin,
    signout,
    clearErrorMessage,
    tryLocalSignin
  },
  {
    token: null,
    errorMessage: "",
  }
);
