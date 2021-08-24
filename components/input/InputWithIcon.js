import React from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Botao({ title, icon, type}) {
    return(
    <View style={styles.inputContainer}>
        <Text style={styles.label}>{title}</Text>
        <View style={styles.input}>
        <MaterialCommunityIcons name={icon} size={22} color="#666" />
          <TextInput style={{paddingLeft: 5, flex: 1, height: 50}} keyboardType={type} />
        </View>
      </View>
    )
  };
  
  const styles = StyleSheet.create({
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