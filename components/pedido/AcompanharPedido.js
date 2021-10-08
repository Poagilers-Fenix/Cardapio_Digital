import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import Modal from "../Modal";

export default function AcompanharPedido({ navigation }) {
  return (
    <View style={{ height: "100%" }}>
      <Text style={styles.title}>Acompanhar Pedido</Text>
      <View style={styles.etapa}>
        <View style={styles.circuloAtivado}>
          <Ionicons
            name="checkbox-outline"
            size={25}
            style={styles.iconeAtivado}
          />
        </View>
        <Text>Pedido Realizado</Text>
        <Text>13:24</Text>
      </View>
      <View style={styles.caminho}>
        <Ionicons
          name="ellipsis-vertical-outline"
          size={35}
          style={styles.iconeAtivado}
        />
      </View>
      <View style={styles.etapa}>
        <View style={styles.circuloAtivado}>
          <Ionicons
            name="fast-food-outline"
            size={25}
            style={styles.iconeAtivado}
          />
        </View>
        <Text>Estamos preparando!</Text>
        <Text>13:26</Text>
      </View>
      <View style={styles.caminho}>
        <Ionicons
          name="ellipsis-vertical-outline"
          size={35}
          style={styles.iconeAtivado}
        />
      </View>
      <View style={styles.etapa}>
        <View style={styles.circuloDesativado}>
          <Ionicons
            name="location-outline"
            size={25}
            style={styles.iconeDesativado}
          />
        </View>
        <Text>Pedido Entregue</Text>
        <Text>hh:mm</Text>
      </View>
      <View style={styles.caminho}>
        <Ionicons
          name="ellipsis-vertical-outline"
          size={35}
          style={styles.iconeDesativado}
        />
      </View>
      <View style={styles.etapa}>
        <View style={styles.circuloDesativado}>
          <Ionicons
            name="receipt-outline"
            size={25}
            style={styles.iconeDesativado}
          />
        </View>
        <Text>Pagamento Efetuado</Text>
        <Text>hh:mm</Text>
      </View>
      <View style={styles.modal}>
        <TouchableOpacity
          outlined={false}
          onPress={() => navigation.navigate("InfoPedido")}
        >
          <Text style={styles.btnFooterBar}>Informações do pedido</Text>
        </TouchableOpacity>
        <Modal navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: "#800",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 30,
    marginTop: 30,
    marginBottom: 20,
  },
  etapa: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    alignItems: "center",
  },
  circuloAtivado: {
    backgroundColor: "#B2DFDB",
    width: 70,
    height: 70,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  circuloDesativado: {
    backgroundColor: "#CFD8DC",
    width: 70,
    height: 70,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  iconeAtivado: {
    color: "#41857A",
  },
  caminho: {
    marginLeft: 38,
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  iconeDesativado: {
    color: "gray",
  },
  btnFooterBar: {
    height: 50,
    color: "white",
    borderRadius: 8,
    color: "#fff",
    backgroundColor: "#800",
    textAlignVertical: "center",
    fontSize: 20,
    width: 240,
    marginRight: 20,
    marginBottom: 15,
    paddingHorizontal: 10,
    textAlign: "center",
  },
  modal: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
