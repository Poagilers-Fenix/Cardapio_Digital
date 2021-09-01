import React, {useState} from 'react';
import { View, Text, StyleSheet, StatusBar} from 'react-native';
import Modal_ from '../components/Modal';
import { Rating, AirbnbRating } from 'react-native-ratings';



export default function rateExperience({navigation}) {
  const [experience, setExperience] = useState('');
  return(
    <View style={styles.container}>
        <Text style={styles.HeaderText}>Avaliar experiência</Text>
        <Text style={styles.normalText}>Avalie como foi sua experiência no geral, sinta-se a vontade para fazer qualquer tipo de comentário.</Text>
        <Rating
        type='custom'
        ratingColor='#800'
        startingValue='1'/>


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
    marginBottom: 70,
    marginTop: 20,
  },
  normalText: {
    marginBottom: 20,
    marginLeft: 30,
  },

  modal: {
    marginTop: 131,
    marginLeft: 283,
  }


});