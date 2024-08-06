import React from "react";
import { FlatList, Text, View, StyleSheet, Pressable } from "react-native";
import { CATEGORIES } from "@/app/data/dummy-data";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealOverviewScreen from "./MealOverviewScreen";

const Stack = createNativeStackNavigator();

const CategoryList = ({ navigation }: any) => {
  return (
    <FlatList
      key={2}
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return (
          <View style={styles.gridItem}>
            <Pressable
              onPress={function handler() {
                console.log("a", item.id);
                navigation.navigate("MealOverviewScreen", { id: item.id });
              }}
            >
              <Text style={[styles.item, { backgroundColor: item.color }]}>
                {item.title}
              </Text>
            </Pressable>
          </View>
        );
      }}
    />
  );
};

export default function CategoriesScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Hello world</Text>
      <NavigationContainer independent={true}>
        <Stack.Navigator>
          <Stack.Screen
            name="Categories"
            component={CategoryList}
            options={{ title: "Categories" }}
          />
          <Stack.Screen
            name="MealOverviewScreen"
            component={MealOverviewScreen}
            options={{ title: "Meal Overview Screen" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    width: "40%",
    height: "40%",
    borderRadius: 8,
    elevation: 4, // shadow for Android
  },
  screen: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  item: {
    padding: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});
