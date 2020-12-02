import React from "react";
import { View, Text } from "react-native";
import Toolbar from "../../components/Toolbar";
import GalleryList from "../../components/GalleryList";
import AddModal from "../../components/AddModal";
import { takePhoto, selectFromCameraRoll } from "../../services/imageService";
import { addImage, getAllImages, remove } from "../../services/fileService";
import Spinner from "../../components/Spinner";
import { isThisTypeNode } from "typescript";

class Gallery extends React.Component {
  state = {
    images: data.images,
    selectedImages: [],
    isAddModalOpen: false,
    loadingImages: false,
  };
  async componentDidMount() {
    await this._fetchItems();
  }
  async _fetchItems() {
    this.setState({ loadingImages: true });
    const images = await getAllImages();
    this.setState({ images, loadingImages: false });
  }
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
  async takePhoto() {
    const photo = await takePhoto();
    if (photo.length > 0) {
      await this.addImage(photo);
    }
    // console.log(photo.uri);
  }
  async selectFromCameraRoll() {
    const photo = await selectFromCameraRoll();
    if (photo.length > 0) {
      await this.addImage(photo);
    }
  }
  async addImage(imageLocation) {
    this.setState({ loadingImages: true });
    const newImage = await addImage(imageLocation);
    const { images } = this.state;
    this.setState({
      images: [...images, newImage],
      isAddModalOpen: false,
      loadingImages: false,
    });
  }
  async deleteSelectedImages() {
    const { selectedImages, images } = this.state;
    this.setState({ loadingImages: true });
    await Promise.all(selectedImages.map((image) => remove(image)));
    this.setState({
      selectedImages: [],
      images: image.filter(
        (image) => selectedImages.indexOf(image.name) === -1
      ),
      loadingImages: false,
    });
  }
  render() {
    const { selectedImages, images, isAddModalOpen } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Toolbar
          onAdd={() => this.setState({ isAddModalOpen: true })}
          onRemove={() => {
            this.deleteSelectedImages();
          }}
          hasSelectedImages={selectedImages.length > 0}
        />
        {loadingImages ? (
          <Spinner />
        ) : (
          <>
            {this.displayCaption()}
            <GalleryList
              onLongPress={(name) => this.onImageLongPress(name)}
              images={images}
              selectedImages={selectedImages}
            />
          </>
        )}
        <AddModal
          isOpen={isAddModalOpen}
          closeModal={() => this.setState({ isAddModalOpen: false })}
          takePhoto={() => this.takePhoto()}
          selectFromCameraRoll={() => this.selectFromCameraRoll()}
        />
      </View>
    );
  }
}

export default Gallery;
