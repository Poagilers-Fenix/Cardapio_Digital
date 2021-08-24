import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function QRCode() {
  return(
    <View style={styles.container}>
      <Text>Teste</Text>
    </View>
  )
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
})