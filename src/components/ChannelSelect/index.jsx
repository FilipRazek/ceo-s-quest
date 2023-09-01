import { StyleSheet, Text, View } from "react-native";
import SelectDropdown from "react-native-select-dropdown";

export const ChannelSelect = ({ options, label }) => {
  return options.length > 0 ? (
    <View style={styles.container}>
      <Text style={styles.label}>{label}:</Text>
      <SelectDropdown
        onValueChange={(value) => console.log(value)}
        data={options}
      />
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  label: {
    marginHorizontal: 20,
    fontSize: 20,
    textTransform: "uppercase",
  },
});
