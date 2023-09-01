import React from "react";
import { StyleSheet, SafeAreaView, View, Button } from "react-native";
import { readString } from "react-native-csv";
import { FilePicker } from "../../components/FilePicker";
import { ChannelSelect } from "../../components/ChannelSelect";
import Svg, { Path } from "react-native-svg";

function extractData(csvString) {
  const convertedData = readString(csvString).data;
  const headers = convertedData[0];
  const cleanedUpData = convertedData.filter(function hasCorrectFormat(row) {
    return row.length === headers.length;
  });
  return cleanedUpData;
}

export const Home = () => {
  const [tableData, setTableData] = React.useState([[]]);

  function updateDataFromFile(newFileData) {
    setTableData(extractData(newFileData));
  }

  function changeGraph() {
    console.log("change graph");
  }

  function changeSettings() {
    console.log("change settings");
  }

  return (
    <SafeAreaView style={styles.container}>
      <FilePicker updateData={updateDataFromFile} />
      <ChannelSelect label="x" options={tableData[0]} />
      <ChannelSelect label="y" options={tableData[0]} />
      {tableData[0].length ? (
        <View style={styles.graphOptions}>
          <Svg
            onPress={changeGraph}
            width={50}
            height={50}
            style={styles.iconButton}
            viewBox={"0 0 24 24"}
          >
            <Path fill="none" d="M0 0h24v24H0z" />
            <Path d="M4 9h4v11H4zM16 13h4v7h-4zM10 4h4v16h-4z" />
          </Svg>
          <Svg
            onPress={changeSettings}
            width={50}
            height={50}
            style={styles.iconButton}
            viewBox={"0 0 24 24"}
          >
            <Path fill="none" d="M0 0h24v24H0V0z" />
            <Path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z" />
          </Svg>
        </View>
      ) : null}
      {tableData[0].length ? (
        <View style={styles.generateButton}>
          <Button title="Generate"></Button>
        </View>
      ) : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: "10%",
  },
  graphOptions: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  generateButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  iconButton: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgray",
    borderRadius: 50,
    padding: 20,
    margin: 10,
  },
});
