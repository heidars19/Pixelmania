import React from "react";
import { View, Text } from "react-native";
import Toolbar from "../../components/Toolbar";
import GalleryList from "../../components/GalleryList";
import data from "../../resources/data.json";

class Gallery extends React.Component {
  state = {
    images: data.images,
    selectedImages: [],
  };
  onImageLongPress(name) {
    const { selectedImages, images } = this.state;
    if (selectedImages.indexOf(name) !== -1) {
      // The image is already within the list
      this.setState({
        selectedImages: selectedImages.filter((image) => image !== name),
      });
    } else {
      // The image needs to be added
      this.setState({
        selectedImages: [...selectedImages, name],
      });
    }
  }
  displayCaption() {
    const { selectedImages } = this.state;
    if (selectedImages.length === 0) {
      return;
    }

    let itemCaption = "images";
    if (selectedImages.length === 1) {
      itemCaption = "image";
    }
    return (
      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          marginLeft: 20,
          MarginTop: 20,
          marginBottom: 5,
        }}
      >
        {selectedImages.length} {itemCaption} selected
      </Text>
    );
  }
  render() {
    const { selectedImages, images } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Toolbar hasSelectedImages={selectedImages.length > 0} />
        {this.displayCaption()}
        <GalleryList
          onLongPress={(name) => this.onImageLongPress(name)}
          images={images}
          selectedImages={selectedImages}
        />
      </View>
    );
  }
}

export default Gallery;
