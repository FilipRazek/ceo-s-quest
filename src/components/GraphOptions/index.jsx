import { Text, View } from "react-native";

export const GraphOptions = ({ table }) => {
  return (
    <View>
      {table.map((item, index) => (
        <Text key={index}>{JSON.stringify(item)}</Text>
      ))}
    </View>
  );
};
