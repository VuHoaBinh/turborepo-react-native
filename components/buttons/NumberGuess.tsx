import { View, StyleSheet, Text } from "react-native";
import Title from "@/components/buttons/Title";

function NumberGuess({ children }: any) {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
}

export default NumberGuess;

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
  },
});
