import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

import Botao from "../components/Button";

export default function TelaCadastro({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <Text>Requisitando permissão para ter acesso à camera.</Text>;
  }
  if (hasPermission === false) {
    return <Text>A permissão de acesso à câmera foi negada</Text>;
  }

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    // alert(`Bar code with type ${type} and data ${data}`);
    setData(data);
    setScanned(false);
    navigation.navigate({
      name: "Menu",
      params: { items: data },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Posicione a câmera sobre o QRCode localizado no estabelecimento
      </Text>

      <View style={{ width: 320, height: 450 }}>
        <BarCodeScanner
          style={StyleSheet.absoluteFillObject}
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        />
      </View>

      <View style={{ width: 250, marginTop: 30 }}>
        <Botao
          titulo="Ver Cardápios"
          acao={"Restaurants"}
          navigation={navigation}
        />
        <Botao
          outlined={true}
          titulo="Ver meus pedidos"
          acao={"MyRequests"}
          navigation={navigation}
        />
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
  titulo: {
    textAlign: "center",
    fontSize: 21,
    color: "#480000",
    marginBottom: 60,
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
});
