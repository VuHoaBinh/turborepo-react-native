import { Text } from "react-native";
import { StyleSheet } from "react-native";

function Title({ children }: any) {
  return <Text style={styles.container}>{children}</Text>;
}

export default Title;
const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 5,
    padding: 10,
    textAlign: "center",
    fontSize: 20,
    color: "white",
  },
});
