import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Modal from "../../components/Modal";
import BotaoPedido from "../../components/pedido/BotaoPedido";

import { getEstab } from "../../API/database";

export default function Restaurants({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [listRequests, setListRequests] = useState([]);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const value = await getEstab();
      if (value !== null && value.length > 0) {
        setListRequests(value.content);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.cardList}
      onPress={() =>
        navigation.navigate({ name: "Menu", params: { items: item } })
      }
    >
      <Text style={styles.cardText}>{item.nome_fantasia}</Text>
      <MaterialCommunityIcons
        name="food-drumstick-outline"
        size={22}
        color="#B71C1C"
      />
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <BotaoPedido acao={"Comanda"} navigation={navigation} />
      <Text style={styles.titulo}>Restaurantes</Text>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={listRequests}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
      <View style={styles.modal}>
        <Modal navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  imagem: {
    width: 100,
    height: 100,
  },
  titulo: {
    textAlign: "center",
    fontSize: 38,
    color: "#880000",
    fontWeight: "bold",
    marginVertical: 10,
  },
  subtitulo: {
    fontSize: 18,
    textAlign: "center",
    color: "#333",
  },
  label: {
    color: "#666",
    fontWeight: "bold",
    marginTop: 10,
  },
  input: {
    borderWidth: 2,
    borderColor: "#aaa",
    borderRadius: 5,
    width: 300,
    height: 40,
    marginBottom: 10,
    alignItems: "center",
    paddingLeft: 5,
    flexDirection: "row",
  },
  link: {
    marginTop: 20,
    color: "#800",
    borderBottomColor: "#800a",
    borderBottomWidth: 1,
    width: 158,
    textAlign: "center",
    fontSize: 18,
  },
  cardList: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 20,
    width: 350,
    height: 50,

    borderColor: "#DFE6ED",
    borderWidth: 2,
    marginVertical: 10,
    borderRadius: 7,
  },
  cardText: {
    marginHorizontal: 25,
  },
  viewSelect: {
    display: "flex",
    flexDirection: "row",
  },
  select: {
    backgroundColor: "red",
  },
  modal: {
    width: "100%",
    justifyContent: "flex-end",
  },
});
