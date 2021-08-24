import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import Botao from '../components/Button';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TelaLogin({ navigation }) {
  return(
    <View style={styles.container}>
      <Image style={styles.imagem} source={require("../assets/perfil-cinza.png")} />
      <Text style={styles.titulo}>Login</Text>
      <Text style={styles.subtitulo}>Bem-vindo(a) de volta!</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Celular</Text>
        <View style={styles.input}>
        <MaterialCommunityIcons name="cellphone-android" size={22} color="#666" />
          <TextInput style={{paddingLeft: 5, flex: 1, height: 50}} keyboardType="numeric" />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Senha</Text>
        <View style={styles.input}>
          <MaterialCommunityIcons name="lock-outline" size={22} color="#666" />
          <TextInput style={{paddingLeft: 5, flex: 1, height: 50}} />
        </View>
      </View>

      <View style={{ width: 250, marginTop: 30 }}>
        <Botao 
          titulo="Entrar" acao={"QRCode"} 
          navigation={navigation}
        />
        <TouchableOpacity style={{alignItems: 'center'}}>
          <Text style={styles.link}>Esqueceu a senha?</Text>
        </TouchableOpacity>
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
  imagem: {
    width: 100,
    height: 100
  }, 
  titulo: {
    textAlign:'center',
    fontSize: 38,
    color: '#480000',
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 22,
    color: '#333',
    marginBottom: 30,
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
  link: {
    marginTop: 20, 
    color: '#800', 
    borderBottomColor: '#800a', 
    borderBottomWidth: 1, 
    width: 158,
    textAlign: 'center',
    fontSize: 18
  }
})