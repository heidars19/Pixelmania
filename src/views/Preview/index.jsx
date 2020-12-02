import React from "react";
import { View, Dimensions, ImageBackground } from "react-native";
import { loadImage } from "../../services/fileService";
import styles from "./styles";
import Spinner from "../../components/Spinner";
import style from "../Main/style";

class Preview extends React.Component {
  state = {
    currentImage: "",
    loadingImage: true,
  };
  async componentDidMount() {
    const { navigation } = this.props;
    const fileName = navigation.getParam("fileName", "");
    // console.log(fileName);
    const currentImage = await loadImage(fileName);
    this.setState({ currentImage, loadingImage: false });
  }
  render() {
    const { currentImage, loadImage } = this.state;
    return loadingImage ? (
      <Spinner />
    ) : (
      <View style={styles.container}>
        <ImageBackground
          resizeMode='contain'
          source={{ uri: `data:image/jpeg;base64,${currentImage}` }}
          style={styles.background}
        />
      </View>
    );
  }
}

export default Preview;
