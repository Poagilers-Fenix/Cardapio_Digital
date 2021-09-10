import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ModalButton({
  navigation,
  acao,
  titulo,
  disabled,
  closeModal,
}) {
  return (
    <View>
      <TouchableOpacity
        style={disabled ? styles.disabled : styles.buttonContainer}
        onPress={() => {
          closeModal == false;
          navigation.navigate(acao);
        }}
      >
        <Text style={disabled ? styles.disabledButton : styles.button}>
          {titulo}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 5,
    padding: 10,
    width: 310,
    alignItems: "center",
    marginBottom: 20,
  },
  disabled: {
    backgroundColor: "#ccca",
    borderColor: "#aaaa",
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    width: 310,
    alignItems: "center",
    marginBottom: 20,
  },
  disabledButton: {
    color: "#aaaa",
    fontSize: 18,
  },
  button: {
    color: "#999",
    fontSize: 18,
  },
});
