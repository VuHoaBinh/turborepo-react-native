import { useState } from "react";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  useWindowDimensions,
} from "react-native";

function StartGameScreen({ pickerNumber }: any) {
  const [enterNumber, setEnterNumber] = useState("");
  const { width, height } = useWindowDimensions();

  let widthSize = 300;

  let heightSize = 300;

  if (width < 380) {
    widthSize = 150;
  }

  if (height < 480) {
    heightSize = 80;
  }

  let styleImage = { width: widthSize, height: heightSize };

  function onChangeEnterNumberHandle(enterNumber: string) {
    setEnterNumber(enterNumber);
  }

  function onResetNumberHandle() {
    setEnterNumber("");
  }

  function submitEnterNumber() {
    const intEnterNumber = parseInt(enterNumber);

    if (intEnterNumber <= 0 || isNaN(intEnterNumber) || intEnterNumber > 99) {
      Alert.alert("wrong number", "Plz input number between 1 to 99", [
        {
          text: "cancel",
          style: "cancel",
          onPress: onResetNumberHandle,
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
      return;
    }
    pickerNumber(intEnterNumber);
    console.log("oke oke");
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position">
        <View style={[styles.container, styleImage]}>
          <TextInput
            style={styles.textInput}
            maxLength={2}
            keyboardType="number-pad"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={onChangeEnterNumberHandle}
            value={enterNumber}
          />
          <View style={styles.button}>
            <PrimaryButton onPress={submitEnterNumber}>Confirm</PrimaryButton>
            <PrimaryButton onPress={onResetNumberHandle}>Reset</PrimaryButton>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  textInput: {
    justifyContent: "center",
    alignItems: "center",
    color: "#FFFFFF",
    borderBottomColor: "red",
    borderBottomWidth: 2,
    marginVertical: 8,
    width: 50,
    height: 50,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  container: {
    display: "flex",
    alignItems: "center",
  },
  button: {
    flexDirection: "row",
  },
});
