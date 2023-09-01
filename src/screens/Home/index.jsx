import React from "react";
import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  View,
  Button,
} from "react-native";
import { readString } from "react-native-csv";
import { FilePicker } from "../../components/FilePicker";
import { ChannelSelect } from "../../components/ChannelSelect";

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

  return (
    <SafeAreaView>
      <StatusBar barStyle={"dark-content"} />
      <View style={styles.container}>
        <View style={styles.header}></View>
        <FilePicker updateData={updateDataFromFile} />
        <ChannelSelect options={tableData[0]} />
        <ChannelSelect options={tableData[0]} />
        <View class="graph-settings" style={{ flex: 1 }}>
          <Button class="icon-button" title="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <g>
                <rect fill="none" height="24" width="24" />
              </g>
              <g>
                <g>
                  <rect height="11" width="4" x="4" y="9" />
                  <rect height="7" width="4" x="16" y="13" />
                  <rect height="16" width="4" x="10" y="4" />
                </g>
              </g>
            </svg>
          </Button>
          <Button class="icon-button" title="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z" />
            </svg>
          </Button>
        </View>
        <View class="generate-button-div" style={{ flex: 1 }}>
          <Button title="Generate"></Button>
        </View>
      </View>
      <View
        style={[styles.diagonalUnderlay, styles.diagonalUnderlayTop]}
      ></View>
      <View
        style={[styles.diagonalUnderlay, styles.diagonalUnderlayBottom]}
      ></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "purple",
    flex: 2,
  },
  diagonalUnderlay: {
    position: "absolute",
    backgroundColor: "pink",
    opacity: 0.4,
    zIndex: -1,
    width: "40%",
    height: "25%",
  },
  diagonalUnderlayTop: {
    clipPath: "polygon(100% 0, 0 0, 0 100%)",
  },
  diagonalUnderlayBottom: {
    right: 0,
    bottom: 0,
    clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
  },
});
