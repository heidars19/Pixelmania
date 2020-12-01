import React from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";
import logo from "../../resources/logo.png";
import styles from "./style";

const Main = ({ navigation: { navigate } }) => (
  <View style={styles.container}>
    <Image style={styles.logo} source={logo} />
    <Text style={styles.title}>Pixelmania</Text>
    <Text style={styles.paragraph}>
      The most powerful image application out there! Feel free to test out its
      powers
    </Text>
    <TouchableHighlight
      style={styles.button}
      onPress={() => navigate("Gallery")}
    >
      <Text style={styles.buttontext}>Gallery</Text>
    </TouchableHighlight>
  </View>
);

export default Main;
