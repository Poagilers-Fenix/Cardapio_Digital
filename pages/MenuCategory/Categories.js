import React from 'react';
import { Text, StyleSheet, View } from 'react-native';


export default function Categories({route}) {
  const { items } = route.params;
  return(
    <View>
      <View style={styles.container}>
        <Text style={styles.titulo}>{items.restaurante}</Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  titulo: {
    textAlign: "center",
    fontSize: 38,
    color: "#880000",
    fontWeight: "bold",
    marginVertical: 10,
  },
});