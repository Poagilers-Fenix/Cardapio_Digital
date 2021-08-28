import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import Botao from '../../components/Button';
import InputWithIcon from '../../components/input/InputWithIcon'

export default function SignIn({ navigation }) {
  return(
    <View style={styles.container}>
      <Image style={styles.imagem} source={require("../../assets/perfil-cinza.png")} />
      <Text style={styles.titulo}>Login</Text>
      <Text style={styles.subtitulo}>Bem-vindo(a) de volta!</Text>

      <InputWithIcon title="Telefone" icon="cellphone-android" type="numeric"/>

      <InputWithIcon title="Senha" icon="lock-outline"/>

      <View style={{ width: 250, marginTop: 30 }}>
        <Botao 
          titulo="Entrar" acao={"QRCodeReader"} 
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