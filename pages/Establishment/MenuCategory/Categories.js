import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
// const getAllFood = require("../../../API/getAllFood.json");
import { firebase } from "../../../util/config";

export default function Categories({ route, navigation, acao }) {
  const { items } = route.params;
  const [isLoading, setLoading] = useState(true);
  const [listItems, setListItems] = useState([]);

  async function getItemsById() {
    var arrayItems = [];
    var db = firebase.database().ref().child("itemCardapio/");
    db.on("child_added", (snapshot) => {
      arrayItems.push(snapshot.val());
      setListItems(
        arrayItems.filter((val) => {
          return val.CodigoEstabelecimento == items.CodigoEstabelecimento;
        })
      );
    });
  }
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      await getItemsById();
      setLoading(false);
    }
    fetchData();
  }, []);
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.subContainer}>
      <View>
        <Image style={styles.imgList} source={{ uri: item.Foto }}></Image>
      </View>
      <View style={styles.cardList}>
        <Text
          style={(styles.cardText, { color: "#880000", fontWeight: "bold" })}
        >
          {item.Nome}
        </Text>
        <Text style={(styles.cardText, { fontWeight: "bold" })}>
          {item.ValCalorico} Kcal
        </Text>
        <Text style={styles.cardText}>{item.Descricao}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.titulo}>{items.NomeFantasia}</Text>
      </View>
      <SafeAreaView style={(styles.container, { marginBottom: 140 })}>
        {isLoading && (
          <View style={styles.messageContainer}>
            <ActivityIndicator size="large" color="blue" />
          </View>
        )}
        <FlatList
          data={listItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.CodigoItem}
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
  },
});
