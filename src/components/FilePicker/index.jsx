import React from "react";
import { StyleSheet, View, Text } from "react-native";
import DocumentPicker from "react-native-document-picker";
import { readFile } from "react-native-fs";
import Svg, { Path } from "react-native-svg";

export const FilePicker = ({ updateData }) => {
  const [fileName, setFileName] = React.useState("No file selected");

  const handleDocumentSelection = async function () {
    try {
      const response = await DocumentPicker.pick({
        presentationStyle: "fullScreen",
      });
      const chosenFile = response[0].uri;
      const fileData = await readFile(chosenFile, "utf8");
      updateData(fileData);
      setFileName(chosenFile.split(/[(%2F)/]/).at(-1));
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log("User cancelled the picker");
      } else console.warn(err);
    }
  };

  return (
    <View style={styles.container}>
      <Text>{fileName}</Text>
      <Svg
        style={styles.refreshIcon}
        onPress={handleDocumentSelection}
        height={48}
        width={48}
        viewBox={"0 0 24 24"}
      >
        <Path fill="none" d="M0 0h24v24H0V0z" />
        <Path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8A5.87 5.87 0 0 1 6 12c0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z" />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
  },
  refreshIcon: {
    flex: 1,
    backgroundColor: "lightgray",
    borderRadius: 50,
    padding: 20,
  },
});
