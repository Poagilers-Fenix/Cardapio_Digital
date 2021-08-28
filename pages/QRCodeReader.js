import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Botao from '../components/Button';
import Camera from '../components/Camera';

export default function TelaCadastro({ navigation }) {
  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>Aponte a câmera do celular para o QR code do restaurante em que estiver</Text>

      <View style={{ width: 320, height: 450 }}>
          <Camera />
      </View>

      <View style={{ width: 250, marginTop: 30 }}>
        <Botao 
          titulo="Ver Cardápios" acao={"Restaurants"} 
          navigation={navigation}
        />
        <Botao 
          outlined={true} titulo="Ver meus pedidos" 
          acao={"MyRequests"} navigation={navigation}
        />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titulo: {
    textAlign:'center',
    fontSize: 21,
    color: '#480000',
    marginBottom: 60,
  },
  label: {
    color: '#666',
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    borderWidth: 2,
    borderColor: '#aaa',
    borderRadius: 5,
    width: 300,
    height: 40,
    marginBottom: 10,
    alignItems: 'center',
    paddingLeft: 5,
    flexDirection: 'row'
  },
});