import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { firebase } from "../../util/config";
import InputWithIcon from "../../components/input/InputWithIcon";
import { createUser } from "../../API/database";

export default function SignUp({ navigation }) {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [listUser, setListUser] = useState([]);

  async function getUsers() {
    var db = firebase.database().ref().child("client/");
    db.once("child_added", (snapshot) => {
      listUser.push(snapshot.val());
    });
  }
  useEffect(() => {
    async function fetchData() {
      await getUsers();
    }
    fetchData();
  }, []);

  const handleRegister = () => {
    if (
      nome === "" ||
      telefone === "" ||
      senha === "" ||
      confirmarSenha === ""
    ) {
      Alert.alert("Erro", "Algum campo não foi preenchido");
      return;
    }
    if (senha !== confirmarSenha) {
      Alert.alert("Erro", "As Senhas estão diferentes");
      return;
    }
    if (listUser.filter((e) => e.telefone === telefone).length > 0) {
      Alert.alert("Erro", "Este telefone já está cadastrado");
      return;
    }
    const usr = {
      nome,
      telefone,
      senha,
      confirmarSenha,
    };
    createUser(usr);
    navigation.navigate("QRCodeReader");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.imagem}
        source={require("../../assets/perfil-cinza.png")}
      />
      <Text style={styles.titulo}>Cadastro</Text>

      <InputWithIcon title="Nome" icon="account" onChange={setNome} />

      <InputWithIcon
        title="Telefone"
        icon="cellphone-android"
        type="numeric"
        onChange={setTelefone}
      />

      <InputWithIcon title="Senha" icon="lock-outline" onChange={setSenha} />
      <InputWithIcon
        title="Confirmar senha"
        icon="lock-outline"
        onChange={setConfirmarSenha}
      />

      <View style={{ width: 250, marginTop: 30 }}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleRegister}
        >
          <Text style={styles.full}>Cadastro</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ alignItems: "center" }}>
          <Text style={styles.link}>Políticas de Privacidade</Text>
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
    width: 200,
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
