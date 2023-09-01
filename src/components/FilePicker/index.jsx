import React from "react";
import { Button, StyleSheet, View, Text } from "react-native";
import DocumentPicker from "react-native-document-picker";
import { readFile } from "react-native-fs";

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
      <Button title="Select file" onPress={handleDocumentSelection} />
      <Text>{fileName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
