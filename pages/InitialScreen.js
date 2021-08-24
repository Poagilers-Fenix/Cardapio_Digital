import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import Botao from '../components/Button';

export default function TelaInicial({ navigation }) {
  return(
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.titulo}>Bem-vindo(a) ao Cardapp!</Text>
      </View>
      <Image
        source={require("../assets/garcom.png")}
        style={styles.imagem}
      />
      <View>
        <Botao 
          titulo="Login com o Google" 
          acao={"TelaLogin"} navigation={navigation}
        />
        <Botao 
          outlined={true} titulo="Já tenho cadastro" 
          acao={"TelaLogin"} navigation={navigation}
        />
        <Botao 
          outlined={true} titulo="Realizar cadastro" 
          acao={"TelaCadastro"} navigation={navigation}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 38,
    flexWrap: 'wrap',
    textAlign: 'center',
    color: '#666',
    width: '60%',
    marginTop: 20,
  },
  imagem: {
    width: '100%',
    height: 400,
    marginTop: 30,
    marginBottom: 40,
  },
});