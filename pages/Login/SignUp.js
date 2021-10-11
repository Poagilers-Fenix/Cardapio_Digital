import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { firebase } from "../../util/config";
import InputWithIcon from "../../components/input/InputWithIcon";
import { createUser } from "../../API/database";

export default function SignUp({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, isLoading] = useState(false);
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const handleRegister = () => {
    if (senha !== confirmarSenha) {
      Alert.alert("Erro", "As Senhas não coincidem");
      return;
    }
    isLoading(true);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, senha)
      .then((response) => {
        console.log(response.user);
        const usr = {
          nome,
          email,
          uid: response.user.uid,
        };
        createUser(usr);
        navigation.navigate("QRCodeReader");
        isLoading(false);
      })
      .catch((error) => {
        text = "";
        if (error.code === "auth/invalid-email") {
          text = "Email inválido, tente novamente";
        } else if (error.code === "auth/weak-password") {
          text =
            "Senha não está nos padrões corretos (mínimo de 6 caracteres), tente novamente";
        } else if (error.code === "auth/email-already-in-use") {
          text =
            "Já existe um usuário cadastrado com esse email no nosso sistema";
        } else {
          text = "Erro ao cadastrar! Contate o suporte";
        }
        isLoading(false);
        Alert.alert("Error", text);
      });
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.imagem}
        source={require("../../assets/perfil-cinza.png")}
      />
      <Text style={styles.titulo}>Cadastro</Text>

      <InputWithIcon title="Nome" icon="account" onChange={setNome} />

      <InputWithIcon title="E-mail" icon="email-outline" onChange={setEmail} />

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
          {loading && (
            <Text style={styles.full}>
              <ActivityIndicator size="large" color="#fff" />
            </Text>
          )}
          {!loading && <Text style={styles.full}>Cadastro</Text>}
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
