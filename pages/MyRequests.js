import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Modal from "../components/Modal";
const getAllRequests = require("../API/getAllRequests.json");

export default function TelaCadastro({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [listRequests, setListRequests] = useState([]);
  const [filterRequest, SetfilterRequest] = useState("");
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.cardList}>
      <View style={{ flex: 3 }}>
        <Text style={(styles.cardText, { fontWeight: "bold", marginLeft: 10 })}>
          {item.restaurante}
        </Text>
      </View>
      <View style={{ flex: 4 }}>
        <Text style={styles.cardText}>{item.pedido}</Text>
      </View>
      <View style={{ flex: 3 }}>
        <Text style={styles.cardText}>R$ {item.preco}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meus Pedidos</Text>
      <Text style={styles.subtitulo}>
        Veja aqui todos os pedidos que você já fez usando o Cardapp.
      </Text>
      <View style={styles.filterRequest}>
        <Text>Ordenar por: </Text>
        <View style={styles.containerPicker}>
          <Picker
            style={styles.pickerStyle}
            selectedValue={filterRequest}
            onValueChange={(itemValue) => SetfilterRequest(itemValue)}
          >
            <Picker.Item label="Menor Preço" value={"Menor Preço"} />
            <Picker.Item label="Mais Pedidos" value={"Mais Pedidos"} />
            <Picker.Item
              label="Mais bem Avaliados"
              value={"Mais bem Avaliados"}
            />
          </Picker>
        </View>
      </View>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={getAllRequests}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
      <View style={styles.modal}>
        <TouchableOpacity>
          <Text style={styles.btnFooterBar}>Pedir novamente</Text>
        </TouchableOpacity>
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
    height: 80,
    width: 350,
    backgroundColor: "#e1e8ef",
    marginVertical: 10,
    borderRadius: 7,
    justifyContent: "space-around",
  },
  cardText: {
    marginHorizontal: 4,
  },
  viewSelect: {
    display: "flex",
    flexDirection: "row",
  },
  select: {
    backgroundColor: "red",
  },
  containerPicker: {
    borderWidth: 1.5,
    borderRadius: 7,
    borderColor: "#aaa",
    marginLeft: 10,
    width: 250,
    height: 40,
    textAlign: "center",
  },
  pickerStyle: {
    marginTop: 7,
  },
  filterRequest: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  modal: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  btnFooterBar: {
    height: 50,
    color: "white",
    borderRadius: 8,
    color: "#fff",
    backgroundColor: "#800",
    textAlignVertical: "center",
    fontSize: 20,
    width: 240,
    marginRight: 20,
    marginBottom: 15,
    paddingHorizontal: 10,
    textAlign: "center",
  },
});
