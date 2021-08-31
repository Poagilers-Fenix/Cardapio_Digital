import React, {useState} from 'react';
import { View, Text, StyleSheet, StatusBar} from 'react-native';
import Botao from '../components/Button';
import {Picker} from '@react-native-picker/picker';
import Modal_ from '../components/Modal';

const ACOES = {
  FLORESTA : "Floresta",
  CREPUSCULO : "Crepúsculo",
  PRAIA : "Praia"
};

export default function Illumination({navigation}) {
  const [modoIluminacao, SetModoIluminacao] = useState('');
  return(
    <View style={styles.container}>
        <Text style={styles.HeaderText}>Mudar iluminação</Text>
        <Text style={styles.normalText}>Selecione um modo de iluminação para que seu espaço fique do jeito desejado</Text>
        <View style={styles.containerPicker}>
            <Picker
              style={styles.pickerStyle}
              selectedValue={modoIluminacao}
              onValueChange={(itemValue) => SetModoIluminacao(itemValue)}>
              <Picker.Item label="Floresta" value={ACOES.FLORESTA} />
              <Picker.Item label="Crepúsculo" value={ACOES.CREPUSCULO} />
              <Picker.Item label="Praia" value={ACOES.PRAIA} />
            </Picker>
          </View>
        <Text style={styles.normalText}>As luzes ficam mais fortes e em tons claros para experienciar uma refeição visualizando cada detalhe.</Text>
        <Botao titulo="Selecionar" acao={"InitialScreen"} navigation={navigation}/>
        <Botao titulo="Desligar" acao={"InitialScreen"} navigation={navigation} outlined={true} />
        <View style={styles.modal}>
         <Modal_ navigation={navigation}/>
        </View>
        <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  HeaderText: {
    textAlign: 'center',
    color: '#800',
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 100,
    marginTop: 20,
  },
  normalText: {
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20
  },
  containerPicker: {
    borderWidth: 1,
    marginLeft: 115,
    marginBottom: 100,
    width: 150,
    height: 40,
    textAlign: 'center'
  },
  pickerStyle: {
    marginTop: 7,
    marginLeft: 2,
  },
  modal: {
    marginTop: 131,
    marginLeft: 283,
  }


});