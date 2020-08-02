import React, { useContext, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { Text, Input, Button } from "react-native-elements";
import { Context as AuthContext } from "../context/AuthContext";

import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const { height, width } = Dimensions.get("window");
import { NavigationEvents } from "react-navigation";

const SignUpScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage, tryLocalSignin } = useContext(
    AuthContext
  );

  useEffect(() => {
    tryLocalSignin();
  }, []);

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
        headerText="Sign Up"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signup}
      />

      <NavLink
        text="Already have an account? Sign in instead"
        routeName="Signin"
      />
    </View>
  );
};

SignUpScreen.navigationOptions = () => {
  return {
    header: () => null,
  };
};

const styles = StyleSheet.create({});

export default SignUpScreen;
