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
import { removeUser, updateUser } from "../../API/database";
import InputWithIcon from "../../components/input/InputWithIcon";

export default function SignUp({ navigation, route }) {
  const { userCode } = route.params;
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [clientInfo, setClientInfo] = useState({});
  // getUsers nesse contexto serve apenas para mostrar as informações
  async function getUsers() {
    var arrayAllClient = [];
    var db = firebase.database().ref().child("client/");
    db.on("child_added", (snapshot) => {
      arrayAllClient.push(snapshot.val());
      arrayAllClient.find((e) => {
        if (e.email === userCode) {
          setClientInfo(e);
        }
      });
    });
  }
  useEffect(() => {
    async function fetchData() {
      await getUsers();
    }
    fetchData();
  }, []);

  const removeClient = () => {
    var user = firebase
      .auth()
      .currentUser.delete()
      .then(() => {
        removeUser(userCode);
        navigation.navigate("InitialScreen");
      })
      .catch((error) => alert(error));
  };

  const editClient = () => {
    let usr = {
      nome: !!nome ? nome : clientInfo.nome,
      email: !!email ? email : clientInfo.email,
    };
    if (email != "") {
      firebase.auth().currentUser.updateEmail(email);
    }
    updateUser(usr, userCode);
    navigation.navigate("InitialScreen");
  };

  const editPasswdClient = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(clientInfo.email)
      .then(() =>
        Alert.alert("Sucesso", "Foi enviado um email para " + clientInfo.email)
      )
      .catch((error) => alert(error));
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
        title="E-mail"
        icon="email-outline"
        onChange={setEmail}
        value={clientInfo.email}
      />

      <View style={{ width: 250, marginTop: 30 }}>
        <TouchableOpacity style={styles.buttonContainer} onPress={editClient}>
          <Text style={styles.outlined}>Salvar</Text>
        </TouchableOpacity>
        <View
          style={
            ({ display: "flex", flexDirection: "row" }, styles.buttonContainer)
          }
        >
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={editPasswdClient}
          >
            <Text style={styles.full}>Editar Senha</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={removeClient}
          >
            <Text style={styles.full}>Excluir conta</Text>
          </TouchableOpacity>
        </View>
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
  },
  full: {
    marginHorizontal: 10,
    padding: 10,
    color: "white",
    borderRadius: 8,
    color: "#fff",
    backgroundColor: "#800",
    textAlignVertical: "center",
    fontSize: 20,
  },
});
