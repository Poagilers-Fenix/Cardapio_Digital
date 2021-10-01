import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

import { getUsers, removeUser, updateUser } from "../../API/database";
import InputWithIcon from "../../components/input/InputWithIcon";

export default function SignUp({ navigation, route }) {
  const { userCode } = route.params;
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [clientInfo, setClientInfo] = useState({});

  useEffect(() => {
    async function fetchData() {
      const list = await getUsers();
      if (list !== null && list.length > 0) {
        list.find((e) => {
          if (e.telefone === userCode) {
            setClientInfo(e);
          }
        });
      }
    }
    fetchData();
  }, []);

  const editClient = () => {
    if (senha !== confirmarSenha) {
      Alert.alert("Erro", "As Senhas estão diferentes");
      return;
    }
    if (userCode === telefone) {
      Alert.alert("Erro", "Este telefone já está cadastrado");
      return;
    }
    let usr = {
      nome: !!nome ? nome : clientInfo.nome,
      telefone: !!telefone ? telefone : clientInfo.telefone,
      senha: !!senha ? senha : clientInfo.senha,
      confirmarSenha: !!confirmarSenha
        ? confirmarSenha
        : clientInfo.confirmarSenha,
    };
    updateUser(usr, userCode);
    navigation.navigate("InitialScreen");
  };
  const removeClient = () => {
    removeUser(userCode);
    navigation.navigate("InitialScreen");
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.imagem}
        source={require("../../assets/perfil-cinza.png")}
      />
      <Text style={styles.titulo}>Editar informações</Text>

      <InputWithIcon
        title="Nome"
        icon="account"
        onChange={setNome}
        value={clientInfo.nome}
      />

      <InputWithIcon
        title="Telefone"
        icon="cellphone-android"
        type="numeric"
        onChange={setTelefone}
        value={clientInfo.telefone}
      />

      <InputWithIcon title="Senha" icon="lock-outline" onChange={setSenha} />
      <InputWithIcon
        title="Confirmar senha"
        icon="lock-outline"
        onChange={setConfirmarSenha}
      />

      <View style={{ width: 250, marginTop: 30 }}>
        <TouchableOpacity style={styles.buttonContainer} onPress={removeClient}>
          <Text style={styles.full}>Excluir conta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer} onPress={editClient}>
          <Text style={styles.full}>Salvar</Text>
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
