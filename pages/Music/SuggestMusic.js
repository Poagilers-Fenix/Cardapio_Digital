import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  FlatList,
  Image,
  TextInput,
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

const getSuggesMusic = require("../../API/getPlaylist.json");

export default function Playlist({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sugerir Música</Text>
      <Text style={styles.text}>Digite o nome da música ou do artista...</Text>
      <View style={{ flexDirection: "row" }}>
        <TextInput
          placeholder="Digite o nome da música ou do artista..."
          style={styles.input}
        />
        <Ionicons
          name="search-outline"
          style={{ fontSize: 30, alignSelf: "center", color: "grey" }}
        />
      </View>
      <Text style={styles.text2}>
        ...ou escolha uma das músicas das playlists abaixo!
      </Text>
      <FlatList
        data={getSuggesMusic}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.viewImgs}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Playlist")}
              style={{ display: "flex", flexDirection: "row-reverse" }}
            >
              <Image style={styles.img} source={{ uri: item.image }} />
            </TouchableOpacity>
          </View>
        )}
      />
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
  text: {
    fontSize: 20,
    color: "#282C3F",
    textAlign: "center",
    marginTop: 20,
  },
  text2: {
    fontSize: 16,
    color: "#282C3F",
    marginTop: 20,
    textAlign: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 0.5,
    padding: 10,
    width: "80%",
    marginLeft: 20,
  },
  viewImgs: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  img: {
    width: 200,
    height: 200,
    marginBottom: 15,
  },
});
