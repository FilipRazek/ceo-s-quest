import React from "react";
import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import { readString } from "react-native-csv";
import { GraphOptions } from "../../components/GraphOptions";
import { FilePicker } from "../../components/FilePicker";

function extractData(csvString) {
  const convertedData = readString(csvString).data;
  const headers = convertedData[0];
  const cleanedUpData = convertedData.filter(function hasCorrectFormat(row) {
    return row.length === headers.length;
  });
  return cleanedUpData;
}

export const Home = () => {
  const [tableData, setTableData] = React.useState([]);

  function updateDataFromFile(newFileData) {
    setTableData(extractData(newFileData));
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      <FilePicker updateData={updateDataFromFile} />
      {tableData.length > 0 ? <GraphOptions table={tableData} /> : null}
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
