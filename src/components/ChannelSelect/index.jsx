import { StyleSheet, Text, View } from "react-native";

export const ChannelSelect = ({ options }) => {
  return (
    <View style={styles.container}>
      <Text>X:</Text>
      {/* {options.length > 0 ? (
        <RNPickerSelect
          onValueChange={(value) => console.log(value)}
          items={options.map((option) => ({ label: option, value: option }))}
        />
      ) : null} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "pink",
  },
});

