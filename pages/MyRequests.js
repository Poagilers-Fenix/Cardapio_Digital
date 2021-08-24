import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';

import Botao from '../components/Button';
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        restaurante: 'Madero',
        pedido: ['Super Burger', 'Suco de laranja natural'],
        preco: 'R$ 42,80'
    },
  ];
export default function TelaCadastro({ navigation }) {
    const renderItem = ({ item }) => (
        <Text>{item.restaurante}             {item.pedido[0]}        {item.preco}</Text>
      );
  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>Meus Pedidos</Text>
      <Text style={styles.subtitulo}>Veja aqui todos os pedidos que você já fez usando o Cardapp.</Text>
      <View style={{ width: 250, marginTop: 30 }}>
    </View>
        <SafeAreaView style={styles.container}>
        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
        </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
      },
      imagem: {
        width: 100,
        height: 100
      }, 
      titulo: {
        textAlign:'center',
        fontSize: 38,
        color: '#880000',
        fontWeight: 'bold',
        marginVertical: 10,
      },
      subtitulo: {
        fontSize: 18,
        textAlign: 'center',
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
});