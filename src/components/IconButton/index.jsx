import { Button, Image } from "react-native";

export const IconButton = ({ icon, onPress }) => {
  return (
    <Button onPress={onPress}>
      <Image source={icon} />
    </Button>
  );
};
