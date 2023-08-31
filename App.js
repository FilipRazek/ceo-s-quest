import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import RNSystemFileBrowser from "react-native-system-file-browser";
import { downloadFile } from "react-native-fs";

export default function App() {
  const csvUrl = "https://people.sc.fsu.edu/~jburkardt/data/csv/airtravel.csv";
  const openFile = () => {
    downloadFile({
      fromUrl: csvUrl,
      toFile: RNSystemFileBrowser.getDownloadDir() + "/airtravel.csv",
    });
    console.log("open file");

    RNSystemFileBrowser.openFileBrower()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.js and start working on your app!</Text>
      <StatusBar style="auto" />
      <Button title="Open CSV file" onPress={openFile} />
    </View>
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
