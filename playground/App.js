import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./playground/screens/HomeScreen";
import ComponentsScreen from "./playground/screens/Component";
import ListScreen from "./playground/screens/ListScreen";
import ImageScreen from "./playground/screens/ImageScreen";
import CounterScreen from "./playground/screens/CounterScreen";
import ColorScreen from "./playground/screens/ColorScreen";
import SquareScreen from "./playground/screens/SquareScreen";
import TextScreen from "./playground/screens/TextScreen";
import BoxScreen from "./playground/screens/BoxScreen";
import SearchScreen from "./playground/screens/SearchScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    TextInput: TextScreen,
    Box: BoxScreen,
    Search: SearchScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
