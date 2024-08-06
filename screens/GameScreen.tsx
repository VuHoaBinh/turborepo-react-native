import { View, StyleSheet, Text, Pressable } from "react-native";
import Title from "@/components/buttons/Title";
import { useState, useEffect } from "react";
import NumberGuess from "@/components/buttons/NumberGuess";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import { Ionicons } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";
// import {} fromuse

function GameScreen({ number, gameOver }: any) {
  const [enterList, setEnterList] = useState([]);
  let minBoundary = 1;
  let maxBoundary = 100;
  let initialScreen = randomNumber(minBoundary, maxBoundary, number);
  const [currentScreenGuess, setCurrentScreenGuess] = useState(initialScreen);

  // function plusNumber(number: any) {
  //   return parseInt(number) + 1;
  // }
  // function minusNumber(number: any) {
  //   return parseInt(number) - 1;
  // }
  function randomNumber(min: any, max: any, exclude: any) {
    const numberRamDom = Math.floor(Math.random() * (max - min)) + min;

    if (numberRamDom == exclude) {
      randomNumber(min, max, exclude);
    } else {
      return numberRamDom;
    }
  }

  function nextNumber(number: any) {
    if (number == "lower") {
      maxBoundary = currentScreenGuess - 1;
    } else {
      minBoundary = currentScreenGuess + 1;
    }
    let newNumberGuess = randomNumber(
      minBoundary,
      maxBoundary,
      currentScreenGuess
    );
    setCurrentScreenGuess(newNumberGuess);

    setEnterList((currentList) => [
      ...currentList,
      { text: `Guess: ${currentScreenGuess}`, id: Math.random().toString() },
    ]);
  }

  useEffect(() => {
    if (currentScreenGuess == number) {
      gameOver();
    }
  }, [currentScreenGuess, number, gameOver]);

  return (
    <View style={styles.container}>
      <Title>Option Guest</Title>
      <NumberGuess>{currentScreenGuess}</NumberGuess>
      <Text>Game Screen</Text>
      <View>
        <PrimaryButton onPress={nextNumber.bind(this, "greater")}>
          <Ionicons name="add" size={24} color="white" />
        </PrimaryButton>
        <PrimaryButton onPress={nextNumber.bind(this, "lower")}>
          <Ionicons name="remove" size={24} color="white" />
        </PrimaryButton>
      </View>
      <View>
        <FlatList
          data={enterList}
          renderItem={(item) => {
            return <Text>{item.item.text}</Text>;
          }}
        />
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
  },
});
