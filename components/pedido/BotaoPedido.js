import React from 'react';
import { StyleSheet, View, StatusBar, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function BotaoPedido({ navigation, acao }) {
    return (
        <View style={styles.botaoPedido} >
            <TouchableOpacity onPress={() => navigation.navigate(acao)}>
                <Ionicons name="grid-outline" size={30} />
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    botaoPedido: {
        alignSelf: 'flex-end',
        marginRight: 20,
    }
});