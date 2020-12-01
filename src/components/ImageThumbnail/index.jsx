import React from "react";
import { Image, View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";

const ImageThumbnail = ({ file, name, onLongPress, isSelected }) => (
  <TouchableOpacity activeOpacity={0.8} onLongPress={() => onLongPress(name)}>
    {isSelected ? (
      <AntDesign name='checkcircleo' style={styles.checkmark} />
    ) : (
      <></>
    )}
    <View style={{ opacity: isSelected ? 0.5 : 1 }}>
      <Image style={styles.image} resizeMode='cover' source={{ uri: file }} />
      {/* <Text>{isSelected ? "Selected" : "Not selected"}</Text> */}
    </View>
  </TouchableOpacity>
);

export default ImageThumbnail;
