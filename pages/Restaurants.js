import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getAllMenu } from '../API/serviceMock';

export default function Restaurants({ navigation }) {
    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.cardList} onPress={() => navigation.navigate('Menu')}>
            <Text style={styles.cardText}>{item.restaurante}</Text>
            <MaterialCommunityIcons name={item.icon} size={22} color="#B71C1C" />
        </TouchableOpacity>
      );
  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>Cardápio</Text>
        <SafeAreaView style={styles.container}>
            <FlatList
                data={getAllMenu}
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
      },
      cardList: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 20,
        width: 350,
        height: 50,

        borderColor: '#DFE6ED',
        borderWidth: 2,
        marginVertical: 10,
        borderRadius: 7

      },
      cardText: {
          marginHorizontal: 25
      },
      viewSelect: {
        display: 'flex',
        flexDirection: 'row',
      },
      select: {
        backgroundColor: 'red'
      }
});