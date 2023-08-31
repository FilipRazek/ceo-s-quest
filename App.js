import React from "react";
import { StyleSheet, Text, Button, StatusBar } from "react-native";
import DocumentPicker from 'react-native-document-picker';

export const App = () => {
  const [fileResponse, setFileResponse] = useState([]);

  const handleDocumentSelection = useCallback(async () => {
    try {
      const response = await DocumentPicker.pick({
        presentationStyle: "fullScreen",
        type: [DocumentPicker.types.csv],
      });
      setFileResponse(response);
    } catch (err) {
      console.warn(err);
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      {fileResponse.map((file, index) => (
        <Text
          key={index.toString()}
          style={styles.uri}
          numberOfLines={1}
          ellipsizeMode={"middle"}
        >
          {file?.uri}
        </Text>
      ))}
      <Button title="Select 📑" onPress={handleDocumentSelection} />
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
