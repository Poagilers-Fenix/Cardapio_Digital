import React, { useState } from "react";
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ProgressBar from "react-native-progress/Bar";

import ModalButton from "./ModalButton";

export default function Modal_({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.musicContainer}>
              <Image
                source={require("../assets/garcom.png")}
                style={styles.musicImage}
              />
              <View style={{ justifyContent: "center" }}>
                <Text style={styles.musicTitle}>Let it be</Text>
                <Text style={styles.musicArtist}>The Beatles</Text>
                <ProgressBar
                  progress={0.3}
                  width={150}
                  style={styles.progressBar}
                  color="#fff"
                />
              </View>
            </View>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => {
                setModalVisible(false);
                navigation.navigate("Comanda");
              }}
            >
              <Text>Fazer Pedido</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => {
                setModalVisible(false);
                navigation.navigate("AcompanharPedido");
              }}
            >
              <Text>Acompanhar Pedido</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => {
                setModalVisible(false);
                navigation.navigate("SeeMusic");
              }}
            >
              <Text>Que música está tocando</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => {
                setModalVisible(false);
                navigation.navigate("Illumination");
              }}
            >
              <Text>Opções de iluminação</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => {
                setModalVisible(false);
                navigation.navigate("rateExperience");
              }}
            >
              <Text>Avaliar experiência</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => {
                setModalVisible(false);
                navigation.navigate("ValidateUser");
              }}
            >
              <Text>Editar perfil</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.modal}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setModalVisible(false)}
          >
            <MaterialCommunityIcons
              name="minus-circle"
              size={61}
              color="#800"
            />
          </TouchableOpacity>
        </View>
      </Modal>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}
      >
        <MaterialCommunityIcons name="plus-circle" size={60} color="#800" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
    marginRight: 20,
    marginBottom: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 22,
  },
  modal: {
    alignItems: "flex-end",
    marginRight: 20,
    marginBottom: 20,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  musicContainer: {
    flexDirection: "row",
    backgroundColor: "#777",
    borderRadius: 5,
    padding: 15,
    marginBottom: 30,
  },
  musicImage: {
    width: 110,
    height: 110,
    marginRight: 10,
  },
  musicTitle: {
    fontWeight: "700",
    color: "#fff",
    fontSize: 18,
  },
  musicArtist: {
    color: "#fff",
  },
  progressBar: {
    borderRadius: 2,
    borderWidth: 0.5,
    padding: 1,
    marginRight: 10,
    marginTop: 10,
  },
  button: {
    borderRadius: 20,
    padding: 10,
  },

  buttonContainer: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 5,
    padding: 10,
    width: 310,
    alignItems: "center",
    marginBottom: 20,
  },
  disabled: {
    backgroundColor: "#ccca",
    borderColor: "#aaaa",
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    width: 310,
    alignItems: "center",
    marginBottom: 20,
  },
  disabledButton: {
    color: "#aaaa",
    fontSize: 18,
  },
  button: {
    color: "#999",
    fontSize: 18,
  },
});
