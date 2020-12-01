import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Main from "../views/Main";
import Gallery from "../views/Gallery";

const StackNavigator = createStackNavigator({
  Main,
  Gallery,
});

export default createAppContainer(StackNavigator);
