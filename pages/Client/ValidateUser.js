import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

import { getUsers } from "../../API/database";
import InputWithIcon from "../../components/input/InputWithIcon";

export default function SignIn({ navigation }) {
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [listUser, setListUser] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const list = await getUsers();
      if (list !== null && list.length > 0) {
        setListUser(list);
      }
    }
    fetchData();
  }, []);

  const handleEnter = () => {
    const usr = listUser.find((e) => {
      return e.telefone === telefone;
    });
    if (telefone === "" || senha === "") {
      Alert.alert("Erro", "Algum campo não foi preenchido");
      return;
    }
    if (!usr) {
      Alert.alert("Erro", "Usuario não encontrado!");
      return;
    }
    if (senha !== usr.senha) {
      Alert.alert("Erro", "Email e/ou senha inválidos");
      return;
    }
    navigation.navigate({
      name: "EditInfoClient",
      params: { userCode: telefone },
    });
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.imagem}
        source={require("../../assets/perfil-cinza.png")}
      />
      <Text style={styles.titulo}>Login</Text>
      <Text style={styles.subtitulo}>
        Valide sua identidade para editar seu perfil
      </Text>

      <InputWithIcon
        title="Telefone"
        icon="cellphone-android"
        type="numeric"
        onChange={setTelefone}
      />

      <InputWithIcon title="Senha" icon="lock-outline" onChange={setSenha} />

      <View style={{ width: 250, marginTop: 30 }}>
        <TouchableOpacity style={styles.buttonContainer} onPress={handleEnter}>
          <Text style={styles.full}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: "center" }}>
          <Text style={styles.link}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  imagem: {
    width: 100,
    height: 100,
  },
  titulo: {
    textAlign: "center",
    fontSize: 38,
    color: "#480000",
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 22,
    color: "#333",
    marginBottom: 30,
    textAlign: "center",
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
  buttonContainer: {
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
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
});
