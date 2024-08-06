import { Image, StyleSheet, View, Text, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import StartGameScreen from "@/screens/StartGameScreens";
import { useState } from "react";
import GameScreen from "@/screens/GameScreen";
import OverGameScreen from "@/screens/OverGameScreen";

export default function HomeScreen() {
  const [inputNumber, setInputNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(true);
  function pickerNumber(number: any) {
    setInputNumber(number);
    setIsGameOver(false);
  }
  let isFlag = <StartGameScreen pickerNumber={pickerNumber} />;
  function gameOverHandler() {
    setIsGameOver(true);
  }
  if (inputNumber) {
    isFlag = (
      <GameScreen inputNumber={inputNumber} onGameOver={gameOverHandler} />
    );
  }

  if (isGameOver && inputNumber) {
    isFlag = <OverGameScreen />;
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <ImageBackground
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <LinearGradient
        colors={["#4c669f", "#3b5998", "#192f6a"]}
        style={styles.linearGradient}
      >
        <Text style={styles.title}>Hello World!</Text>
        <StatusBar style="auto" />
        {isFlag}
      </LinearGradient>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 5,
  },
  title: {
    color: "#FFFFFF",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 390,
    bottom: 0,
    left: 0,
    position: "absolute",
    opacity: 0.25,
  },
});
