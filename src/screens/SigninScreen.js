import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

import { Context } from "../context/AuthContext";

import { NavigationEvents } from "react-navigation";
// add/remove listeners

const SignInScreen = () => {
  const { state, signin,clearErrorMessage } = useContext(Context);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <NavigationEvents
        onWillFocus={clearErrorMessage}
        onDidFocus={() => {}}
        onWillBlur={clearErrorMessage}
        onDidBlur={() => {}}
      />
      <AuthForm
        headerText="SignIn"
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitButtonText="Sign In"
      />
      <NavLink
        text="Don't have an account? Sign up instead"
        routeName="Signup"
      />
    </View>
  );
};

SignInScreen.navigationOptions = () => {
  return {
    header: () => null,
  };
};

const styles = StyleSheet.create({});

export default SignInScreen;
