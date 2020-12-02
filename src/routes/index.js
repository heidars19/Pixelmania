import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Main from "../views/Main";
import Gallery from "../views/Gallery";
import Preview from "../views/Preview";

const StackNavigator = createStackNavigator({
  Main,
  Gallery,
  Preview,
});

export default createAppContainer(StackNavigator);
