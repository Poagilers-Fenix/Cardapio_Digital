import React from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
const getAllFood = require("../../../API/getAllFood.json");

export default function Categories({ route, navigation, acao }) {
  const { items } = route.params;
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.subContainer}>
      <View>
        <Image style={styles.imgList} source={{ uri: item.img }}></Image>
      </View>
      <View style={styles.cardList}>
        <Text
          style={(styles.cardText, { color: "#880000", fontWeight: "bold" })}
        >
          {item.name}
        </Text>
        <Text style={(styles.cardText, { fontWeight: "bold" })}>
          {item.calories} Kcal
        </Text>
        <Text style={styles.cardText}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.titulo}>{items.nome_fantasia}</Text>
      </View>
      <SafeAreaView style={(styles.container, { marginBottom: 140 })}>
        <FlatList
          data={getAllFood}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
  },
  titulo: {
    textAlign: "center",
    fontSize: 38,
    color: "#880000",
    fontWeight: "bold",
    marginVertical: 10,
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    margin: 10,
  },
  imgList: {
    width: 100,
    height: 100,
    borderRadius: 7,
    marginRight: 9,
  },
  cardList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",

    borderRadius: 7,

    width: 250,
  },
  cardText: {
    marginHorizontal: 0,
    textAlign: "center",
  },
});
