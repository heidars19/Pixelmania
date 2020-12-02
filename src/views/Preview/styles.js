import { Dimensions, StyleSheet } from "react-native";

const { width: winWidth, height: winHeight } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    backgroundColor: "black",
    width: winWidth,
    height: winHeight,
  },
});
