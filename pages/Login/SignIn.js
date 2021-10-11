import React, { useState, useEffect } from "react";
import { LogBox } from "react-native";
LogBox.ignoreLogs(["Setting a timer"]);
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import InputWithIcon from "../../components/input/InputWithIcon";
import { firebase } from "../../util/config";

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, isLoading] = useState(false);

  const handleEnter = () => {
    isLoading(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .then((response) => {
        navigation.navigate("QRCodeReader");
        isLoading(false);
      })
      .catch((error) => {
        text = "";
        if (error.code === "auth/invalid-email") {
          text = "Email inválido, tente novamente";
        } else if (error.code === "auth/wrong-password") {
          text = "Senha inválida, tente novamente";
        } else if (error.code === "auth/weak-password") {
          text =
            "Senha não está nos padrões corretos (mínimo de 6 caracteres), tente novamente";
        } else if (error.code === "auth/user-not-found") {
          text =
            "Usuário não encontrado, verifique o email e senha e tente novamente";
        } else {
          text = "Erro ao cadastrar! Contate o suporte";
        }
        isLoading(false);
        Alert.alert("Erro", text);
      });
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.imagem}
        source={require("../../assets/perfil-cinza.png")}
      />
      <Text style={styles.titulo}>Login</Text>
      <Text style={styles.subtitulo}>Bem-vindo(a) de volta!</Text>

      <InputWithIcon title="E-mail" icon="email-outline" onChange={setEmail} />

      <InputWithIcon title="Senha" icon="lock-outline" onChange={setSenha} />

      <View style={{ width: 250, marginTop: 30 }}>
        <TouchableOpacity style={styles.buttonContainer} onPress={handleEnter}>
          {loading && (
            <Text style={styles.full}>
              <ActivityIndicator size="large" color="#fff" />
            </Text>
          )}
          {!loading && <Text style={styles.full}>Login </Text>}
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
