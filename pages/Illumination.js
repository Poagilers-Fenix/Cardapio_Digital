import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, StatusBar} from 'react-native';
import Botao from '../components/Button';
import {Picker} from '@react-native-picker/picker';

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
        <Botao titulo="Selecionar" acao={"TelaInicial"} navigation={navigation}/>
        <Botao titulo="Desligar" acao={"TelaInicial"} navigation={navigation} outlined={true}/>
        <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 20,
    borderColor: 'white',
    
  },
  HeaderText: {
    textAlign: 'center',
    color: '#800',
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 100,
  },
  normalText: {
    marginBottom: 20,
  },
  normalText: {
    marginBottom: 20,
  },
  containerPicker: {
    borderWidth: 1,
    marginLeft: 90,
    marginBottom: 100,
    width: 150,
    height: 40,
    textAlign: 'center'
  },
  pickerStyle: {
    marginTop: 7,
  }


});