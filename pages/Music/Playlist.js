import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  FlatList,
  Image,
} from "react-native";

import Modal from "../../components/Modal";
import Button from "../../components/Button";
import Ionicons from "react-native-vector-icons/Ionicons";
//<Ionicons name="time-outline"/>
const getPlaylist = require("../../API/getPlaylist.json");

export default function Playlist({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fila de Reprodução</Text>
      <View>
        <Text style={styles.bold}>Tocando agora</Text>

        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              textAlign: "center",
            }}
          >
            <Ionicons
              name="musical-notes"
              style={{ fontSize: 14, marginLeft: 5, marginTop: 30 }}
            />
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{getPlaylist[0].name}</Text>
              <Text style={styles.compositor}>{getPlaylist[0].compositor}</Text>
            </View>
            <Text style={{ marginRight: 20, marginTop: 30, fontSize: 16 }}>
              {getPlaylist[0].finalTime}
            </Text>
          </View>
        </View>
      </View>

      <Text style={styles.bold}>Na fila</Text>
      <FlatList
        data={getPlaylist}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
              <Ionicons
                name="musical-notes"
                style={{ fontSize: 14, marginLeft: 5, marginTop: 30 }}
              />
              <View style={{ flex: 1 }}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.compositor}>{item.compositor}</Text>
              </View>
              <Text style={{ marginRight: 20, marginTop: 30, fontSize: 16 }}>
                {item.finalTime}
              </Text>
            </View>
          </View>
        )}
      />
      <View style={styles.modal}>
        <TouchableOpacity
          outlined={true}
          onPress={() => navigation.navigate("SuggestMusic")}
        >
          <Text style={styles.btnFooterBar}>Sugerir Música</Text>
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
  },
  title: {
    fontSize: 40,
    color: "#880000",
    textAlign: "center",
    marginTop: "10%",
    fontWeight: "bold",
  },
  modal: {
    width: "100%",
    justifyContent: "flex-end",
  },
  name: {
    fontSize: 16,
    color: "#282C3F",
    marginLeft: 30,
    marginTop: 20,
  },
  compositor: {
    fontSize: 13,
    color: "#282C3F",
    marginLeft: 30,
    flexDirection: "column",
  },
  bold: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 30,
    marginTop: 10,
    marginBottom: 5,
  },
  modal: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#fff",
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
