import React from "react";
import {
  StyleSheet,
  Text,
  Button,
  StatusBar,
  SafeAreaView,
} from "react-native";
import DocumentPicker from "react-native-document-picker";
import { readFile } from "react-native-fs";
import { readString } from "react-native-csv";
import { GraphOptions } from "../../components/GraphOptions";


export const Home = () => {
  const [fileData, setFileData] = React.useState([]);
  const [csvFile, setCsvFile] = React.useState("No file selected");

  const handleDocumentSelection = async function () {
    try {
      const response = await DocumentPicker.pick({
        presentationStyle: "fullScreen",
        type: [DocumentPicker.types.plainText, DocumentPicker.types.csv],
      });
      const chosenFile = response[0].uri;
      const fileData = await readFile(chosenFile, "utf8");
      const convertedData = readString(fileData);
      setFileData(convertedData);
      setCsvFile(chosenFile.split("/").at(-1));
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log("User cancelled the picker");
      } else console.warn(err);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      <Button title="Select file" onPress={handleDocumentSelection} />
      <Text>{csvFile}</Text>
      {fileData.length > 0 ? <GraphOptions table={fileData} /> : null}
    </SafeAreaView>
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
