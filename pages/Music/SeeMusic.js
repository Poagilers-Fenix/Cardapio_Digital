import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const getVerMusica = require('../../API/getMusic.json')

export default function MusicaTocando(){
    return(
        <View>
            <Text style={styles.title}>Múscia</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        color: '#880000',
        textAlign: 'center'
    }

});