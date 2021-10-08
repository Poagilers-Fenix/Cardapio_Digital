import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Alert,
} from "react-native";
import Botao from "../components/Button";
import { Picker } from "@react-native-picker/picker";
import Modal_ from "../components/Modal";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Illumination({ navigation }) {
  const [modoIluminacao, SetModoIluminacao] = useState("foresta");
  const [msgLog, setMsgLog] = useState("");

  const createUser = () => {
    try {
      fetch("http://192.168.15.10:1880/luz", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          modoLuz: modoIluminacao,
        }),
      });
      Alert.alert(
        "Sucesso",
        "Modo de iluminação mudado para " + modoIluminacao
      );
    } catch (error) {
      Alert.alert(
        "Erro",
        "Ocorreu um erro ao troca iluminação, tente novamente mais tarde"
      );
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.HeaderText}>Mudar iluminação</Text>
      <Text style={styles.normalText}>
        Selecione um modo de iluminação para que seu espaço fique do jeito
        desejado
      </Text>
      <View style={styles.viewPicker}>
        <Picker
          style={styles.pickerStyle}
          selectedValue={modoIluminacao}
          onValueChange={(itemValue) => SetModoIluminacao(itemValue)}
        >
          <Picker.Item label="Floresta" value={"foresta"} />
          <Picker.Item label="Crepúsculo" value={"crepusculo"} />
          <Picker.Item label="Praia" value={"praia"} />
        </Picker>
      </View>
      <View>
        <Text style={styles.aviso}>
          <Ionicons name="alert-circle-outline" size={24} />
          As luzes da mesa variam de intencidade conforme modo selecionado
        </Text>
      </View>
      <View style={styles.viewBtn}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={async () => await createUser()}
        >
          <Text style={styles.full}>Selecionar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={async () => await createUser()}
        >
          <Text style={styles.outlined}>Desligar Iluminação</Text>
        </TouchableOpacity>
        <View style={styles.modal}>
          <Modal_ navigation={navigation} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  HeaderText: {
    textAlign: "center",
    color: "#800",
    fontSize: 38,
    fontWeight: "bold",
  },
  normalText: {
    textAlign: "center",
    fontSize: 18,
    color: "#333",
    marginHorizontal: 15,
  },
  modal: {
    marginTop: 40,
  },
  viewPicker: {
    marginTop: 40,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 7,
  },

  pickerStyle: {
    padding: 20,
  },
  viewBtn: {
    position: "absolute",
    width: "100%",
    bottom: 0,
  },
  aviso: {
    color: "#800",
    textAlign: "center",
    textAlignVertical: "center",
    marginTop: 10,
    marginHorizontal: 10,
  },
  full: {
    height: 50,
    width: "75%",
    paddingBottom: 5,
    color: "white",
    borderRadius: 8,
    color: "#fff",
    backgroundColor: "#800",
    textAlignVertical: "center",
    textAlign: "center",
    justifyContent: "center",
    fontSize: 20,
  },
  outlined: {
    height: 50,
    width: "75%",
    paddingBottom: 5,
    color: "white",
    borderRadius: 8,
    borderColor: "#800",
    borderWidth: 2,
    color: "#800",
    textAlignVertical: "center",
    textAlign: "center",
    justifyContent: "center",
    fontSize: 19,
    marginTop: 15,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
