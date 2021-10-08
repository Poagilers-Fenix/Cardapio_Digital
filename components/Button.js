import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

export default function Botao({ navigation, titulo, outlined, acao, row }) {
  return (
    <View>
      <TouchableOpacity
        style={row ? styles.buttonContainerForRow : styles.buttonContainer}
        onPress={() => navigation.navigate(acao)}
      >
        <Text style={outlined ? styles.outlined : styles.full}>{titulo}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainerForRow: {
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
    width: 200,
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
