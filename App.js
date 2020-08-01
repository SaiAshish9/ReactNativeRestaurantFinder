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

const SwitchNavigator = createSwitchNavigator({
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

export default createAppContainer(SwitchNavigator);
