import React from "react";
import PropTypes from "prop-types";
import { View, FlatList } from "react-native";
import ImageThumbnail from "../ImageThumbnail";

const GalleryList = ({ images, onLongPress, selectedImages }) => (
  <View style={{ flex: 1 }}>
    <FlatList
      numColumns={3}
      data={images}
      extraData={selectedImages}
      renderItem={({ item: { file, name } }) => {
        return (
          <ImageThumbnail
            file={file}
            name={name}
            onLongPress={onLongPress}
            isSelected={selectedImages.indexOf(name) !== -1}
          />
        );
      }}
      keyExtractor={(image) => image.name}
    />
  </View>
);

GalleryList.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      file: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onLongPress: PropTypes.func.isRequired,
  selectedImages: PropTypes.array.isRequired,
};

export default GalleryList;
