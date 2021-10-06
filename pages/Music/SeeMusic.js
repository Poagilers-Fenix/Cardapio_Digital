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
import ProgressBar from "react-native-progress/Bar";

const playlist = require("../../API/getPlaylist.json");

export default function MusicaTocando({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Música</Text>
      <View style={styles.container}>
        <Image style={styles.img} source={{ uri: playlist[0].image }} />
        <Text style={styles.name}>{playlist[0].name}</Text>
        <Text style={styles.compositor}>{playlist[0].compositor}</Text>
        <ProgressBar progress={1.0} style={styles.bar} />
        <View style={{ flexDirection: "row" }}>
          <Text style={{ marginRight: 240, color: "#282C3F" }}>
            {playlist[0].initalTime}
          </Text>
          <Text style={{ color: "#282C3F" }}>{playlist[0].finalTime}</Text>
        </View>
      </View>

      <View style={styles.modal}>
        <Button
          navigation={navigation}
          acao={"Playlist"}
          outline={false}
          titulo="Ver Fila de Reprodução"
        />
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
  title: {
    fontSize: 40,
    color: "#880000",
    textAlign: "center",
    marginTop: "20%",
    fontWeight: "bold",
  },
  modal: {
    width: "100%",
    justifyContent: "flex-end",
  },
  img: {
    width: 300,
    height: 300,
    marginTop: 20,
  },
  name: {
    fontSize: 30,
    color: "#282C3F",
    textAlign: "center",
    marginTop: 20,
    fontWeight: "bold",
  },
  compositor: {
    fontSize: 20,
    color: "#282C3F",
    textAlign: "center",
    marginTop: 5,
  },
  bar: {
    marginTop: 10,
    width: 350,
    color: "steelblue",
    alignSelf: "center",
  },
});
