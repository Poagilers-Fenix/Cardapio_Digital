import React, { useState } from "react";
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ProgressBar from 'react-native-progress/Bar';

import ModalButton from "./ModalButton";

export default function Modal_({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.musicContainer}>
              <Image source={require('../assets/garcom.png')} style={styles.musicImage} />
              <View style={{ justifyContent: 'center' }}>
                <Text style={styles.musicTitle}>Let it be</Text>
                <Text style={styles.musicArtist}>The Beatles</Text>
                <ProgressBar
                  progress={0.3} width={150} 
                  style={styles.progressBar} color='#fff' 
                />
              </View>
            </View>
            <ModalButton disabled={true} titulo="Fazer pedido" />
            <ModalButton disabled={true} titulo="Acompanhar pedido" />
            <ModalButton titulo="Que música está tocando?" />
            <ModalButton titulo="Opções de iluminação" acao={"Illumination"} 
            navigation={navigation} />
            <ModalButton titulo="Avaliar experiência" acao={"rateExperience"} 
            navigation={navigation} />
          </View>
        </View>
        <View style={styles.modal}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <MaterialCommunityIcons name="minus-circle" size={61} color="#800"/>
          </TouchableOpacity>
        </View>
      </Modal>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}
      >
        <MaterialCommunityIcons name="plus-circle" size={60} color="#800" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    alignItems: 'flex-end',
    marginRight: 20,
    marginBottom: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 22,
  },
  modal:{
    alignItems: 'flex-end',
    marginRight: 20,
    marginBottom: 20
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  musicContainer: {
    flexDirection: 'row', 
    backgroundColor: '#777', 
    borderRadius: 5,
    padding: 15,
    marginBottom: 30
  },
  musicImage: {
    width: 110,
    height: 110,
    marginRight: 10,
  },
  musicTitle:{
    fontWeight: '700',
    color: '#fff',
    fontSize: 18
  },
  musicArtist:{
    color: '#fff',
  },
  progressBar: {
    borderRadius: 2, 
    borderWidth: .5, 
    padding: 1, 
    marginRight: 10,
    marginTop: 10
  },
  button: {
    borderRadius: 20,
    padding: 10,
  },
});