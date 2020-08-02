import React from "react";

import { createAppContainer, createSwitchNavigator } from "react-navigation";

import { createBottomTabNavigator } from "react-navigation-tabs";

import { createStackNavigator } from "react-navigation-stack";

import AccountScreen from "./src/screens/AccountScrren";
import SignUpScreen from "./src/screens/SignupScreen";
import SignInScreen from "./src/screens/SigninScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen"
import { setNavigator } from "./src/navigationRef";

const SwitchNavigator = createSwitchNavigator({
  ResolveAuth:ResolveAuthScreen,
  loginFlow: createStackNavigator(
    {
      Signup: SignUpScreen,
      Signin: SignInScreen,
    }
    // {
    //   transitionConfig: () => ({
    //     cardStyleInterpolator: CardStyleInterpolators.forHorizontal,
    //   }),
    // }
  ),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen,
    }),
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen,
  }),
});

const App = createAppContainer(SwitchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App
        ref={(navigator) => {
          setNavigator(navigator);
        }}
      />
    </AuthProvider>
  );
};
