import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { Tab } from "react-native-elements";

export default function TelaCadastro({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Madeiro</Text>
      <Tab>
        <Tab.Item title="Destaque" />
        <Tab.Item title="Pratos" />
        <Tab.Item title="Bebidas" />
      </Tab>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  titulo: {
    textAlign:'center',
    fontSize: 38,
    color: '#880000',
    fontWeight: 'bold',
    marginVertical: 20,
  },
});
