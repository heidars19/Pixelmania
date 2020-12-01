import React from "react";
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

export default GalleryList;
