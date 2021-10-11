import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Categories from "./MenuCategory/Categories";
import { firebase } from "../../util/config";

const Tab = createBottomTabNavigator();

export default function Menu({ route, navigation, acao }) {
  let { items } = route.params;
  let categorieCod = 0;
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Destaque") {
              iconName = focused ? "star" : "star-outline";
            } else if (route.name === "Pratos") {
              iconName = "restaurant";
            } else if (route.name === "Bebidas") {
              iconName = "beer";
            } else if (route.name === "Sobremesas") {
              iconName = "wine";
            } else if (route.name === "Lanches") {
              iconName = "pizza";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="Destaque"
          component={Categories}
          initialParams={{ items, categorieCod: "semCategoria", Destaque: "S" }}
          options={({ title: "Destaque" }, { headerShown: false })}
        ></Tab.Screen>
        <Tab.Screen
          name="Pratos"
          component={Categories}
          initialParams={{ items, categorieCod: 2 }}
          options={({ title: "Pratos" }, { headerShown: false })}
        ></Tab.Screen>
        <Tab.Screen
          name="Bebidas"
          component={Categories}
          initialParams={{ items, categorieCod: 0 }}
          options={({ title: "Bebidas" }, { headerShown: false })}
        ></Tab.Screen>
        <Tab.Screen
          name="Lanches"
          component={Categories}
          initialParams={{ items, categorieCod: 3 }}
          options={({ title: "Lanches" }, { headerShown: false })}
        ></Tab.Screen>
        <Tab.Screen
          name="Sobremesas"
          component={Categories}
          initialParams={{ items, categorieCod: 1 }}
          options={({ title: "Sobremesas" }, { headerShown: false })}
        ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  titulo: {
    textAlign: "center",
    fontSize: 38,
    color: "#880000",
    fontWeight: "bold",
    marginVertical: 20,
  },
});
