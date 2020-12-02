import React from "react";
import PropTypes from "prop-types";
import { withNavigation } from "react-navigation";
import { Image, View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";

const ImageThumbnail = ({ file, name, onLongPress, isSelected }) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={() => navigate("Preview", (fileName: name))}
    onLongPress={() => onLongPress(name)}
  >
    {isSelected ? (
      <AntDesign name='checkcircleo' style={styles.checkmark} />
    ) : (
      <></>
    )}
    <View style={{ opacity: isSelected ? 0.5 : 1 }}>
      <Image
        style={styles.image}
        resizeMode='cover'
        source={{ uri: `data:image/jpeg;base64,${file}` }}
      />
      {/* <Text>{isSelected ? "Selected" : "Not selected"}</Text> */}
    </View>
  </TouchableOpacity>
);

ImageThumbnail.propTypes = {
  file: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onLongPress: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

export default ImageThumbnail;
