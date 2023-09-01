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

export default function App() {
  const [csvFile, setCsvFile] = React.useState([]);

  const handleDocumentSelection = async function () {
    try {
      const response = await DocumentPicker.pick({
        presentationStyle: "fullScreen",
      });
      const chosenFile = response[0].uri;
      const fileData = await readFile(chosenFile, "utf8");
      const convertedData = readString(fileData);
      console.log(convertedData);

      setCsvFile(chosenFile);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log("User cancelled the picker");
      } else console.warn(err);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      <Text style={styles.uri} numberOfLines={1} ellipsizeMode={"middle"}>
        {csvFile}
      </Text>
      <Button title="Select 📑" onPress={handleDocumentSelection} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
