import React, { useEffect, useContext } from "react";
import { Context as AuthContext } from "../context/AuthContext";

import { View, ActivityIndicator } from "react-native";

const ResolveAuthScreen = () => {
  const { tryLocalSignin } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator />
    </View>
  ); //
};

export default ResolveAuthScreen;
