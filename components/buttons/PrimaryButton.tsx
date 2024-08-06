import {
  Text,
  View,
  StyleSheet,
  Pressable,
  GestureResponderEvent,
  ViewStyle,
  TextStyle,
  Dimensions,
} from "react-native";

type PrimaryButtonProps = {
  children: React.ReactNode;
  onPress: (event: GestureResponderEvent) => void;
};

function PrimaryButton({ children, onPress }: PrimaryButtonProps) {
  // function pressedButton() {
  //   console.log("hahah");
  // }
  return (
    <View>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.button, styles.press] : styles.button
        }
        onPress={onPress}
        android_ripple={{ color: "green" }}
      >
        <Text style={styles.title}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;
const fixSize = Dimensions.get("window").width;
const styles = StyleSheet.create({
  title: {
    color: "#FFFFFF",
    backgroundColor: fixSize < 380 ? "yellow" : "red",
    borderRadius: 4,
    shadowColor: "white",
    padding: 10,
    margin: 10,
    shadowOffset: { width: 2, height: 2 }, // size of shadow
  },
  button: {
    color: "pink",
  },
  press: {
    opacity: 0.75,
  },
});
