import React, { useState } from "react";
import { View, Text, StyleSheet, StatusBar, TextInput } from "react-native";
import Modal_ from "../components/Modal";
import { Rating, AirbnbRating } from "react-native-ratings";
import Botao from "../components/Button";

export default function rateExperience({ navigation }) {
  const [experience, setExperience] = useState(0);
  const [texto, setTexto] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.HeaderText}>Avaliar experiência</Text>
      <Text style={styles.normalText}>
        Avalie como foi sua experiência no geral, sinta-se a vontade para fazer
        qualquer tipo de comentário.
      </Text>
      <Rating
        type="custom"
        ratingColor="#800"
        onFinishRating={(number) => setExperience(number)}
        startingValue="1"
      />
      <TextInput
        multiline={true}
        style={styles.textInput}
        numberOfLines={13}
        onChangeText={(text) => setTexto({ text })}
        value={texto}
        placeholder={
          "Se quiser deixar um comentário justificando a avaliação sobre sua experiência, fique à vontade! Além de nos ajudar, também auxilia outras pessoas que venham a utilizar o aplicativo."
        }
      />

      <View style={styles.buttonsContainer}>
        <Botao
          titulo="Cancelar"
          acao={"InitialScreen"}
          navigation={navigation}
          outlined={true}
          row
        />
        <Botao
          titulo="Enviar"
          acao={"InitialScreen"}
          navigation={navigation}
          row
        />
      </View>
      <View style={styles.modal}>
        <Modal_ navigation={navigation} />
      </View>
      <StatusBar style="auto" />
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
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 70,
    marginTop: 20,
  },
  normalText: {
    marginBottom: 20,
    marginLeft: 30,
  },
  modal: {
    marginTop: 100,
    marginLeft: 283,
  },
  textInput: {
    borderWidth: 1,
    marginTop: 30,
    marginHorizontal: 30,
    marginBottom: 10,
    textAlignVertical: "top",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
});
