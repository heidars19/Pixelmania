import * as FileSystem from "expo-file-system";

const imageDirectory = `${FileSystem.documentDirectory}images`;

export const copyFile = async (file, newLocation) => {
  return FileSystem.copyAsync({
    from: file,
    to: newLocation,
  });
};

export const remove = async (fileName) => {
  return FileSystem.deleteAsync(`${imageDirectory}/${fileName}`, {
    idempotent: true,
  });
};

const loadImage = async (fileName) => {
  return FileSystem.readAsStringAsync(`${imageDirectory}/${fileName}`, {
    encoding: FileSystem.EncodingType.Base64,
  });
};

export const addImage = async (imageLocation) => {
  const folderSplit = imageLocation.split("/");
  const fileName = folderSplit[folderSplit.length - 1];
  await copyFile(imageLocation, `${imageLocation}/${fileName}`);

  return {
    name: fileName,
    file: await loadImage(fileName),
  };
};

const setupDirectory = async () => {
  const dir = await FileSystem.getInfoAsync(imageDirectory);
  if (!dir.exists) {
    await FileSystem.makeDirectoryAsync(imageDirectory);
  }
};
export const getAllImages = async () => {
  // Check if directory exists
  await setupDirectory();

  const result = await FileSystem.readDirectoryAsync(imageDirectory);
  return Promise.all(
    result.map(async (fileName) => {
      return {
        name: fileName,
        file: await loadImage(fileName),
      };
    })
  );
};
