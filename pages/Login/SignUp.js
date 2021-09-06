import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

import { getUsers, setUsers } from "../../Storage";
import InputWithIcon from "../../components/input/InputWithIcon";

export default function SignUp({ navigation }) {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
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

  const handleRegister = () => {
    if (senha !== confirmarSenha) {
      Alert.alert("Erro", "As Senhas estão diferentes");
      return;
    }
    if (listUser.filter((e) => e.telefone === telefone).length > 0) {
      Alert.alert("Erro", "Este telefone já está cadastrado");
      return;
    }
    let users = [...listUser];
    const usr = {
      nome,
      telefone,
      senha,
      confirmarSenha,
    };
    users.push(usr);
    setUsers(users);
    setListUser(users);
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
        <TouchableOpacity onPress={handleRegister}>
          <Text>Cadastro</Text>
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
});
