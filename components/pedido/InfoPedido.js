import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Botao from '../Button';
import Modal from '../Modal';

const dados = require('../../API/pedidos.json')


export default function InfoPedido({ navigation }) {
    return (
        <View style={{ height: '100%' }}>
            <Text style={styles.title}>Sua Comanda</Text>
            <View style={styles.item}>
                <Text style={[styles.subtitle, { flex: 3 }]}>Item</Text>
                <Text style={[styles.subtitle, { flex: 2 }]}>Qtd</Text>
                <Text style={[styles.subtitle, { flex: 1 }]}>Preço</Text>
            </View>
            <View>
                <FlatList
                    data={dados}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.container}>
                            <View style={styles.item}>
                                <Text style={{ flex: 3 }}>{item.nome}</Text>
                                <Text style={{ flex: 2 }}>{item.quantidade}</Text>
                                <Text style={[styles.qtdPreco], { flex: 1 }}>R$ {item.preco}</Text>
                            </View>
                        </View>
                    )}
                />
            </View>
            <View style={{ borderColor: 'black', borderBottomWidth: 3, marginHorizontal: 5 }} />
            <View style={styles.total}>
                <Text>Total: </Text>
                <Text>R$ 79.30</Text>
            </View>
            <View>
                <Modal navigation={navigation} />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    },
    title: {
        color: '#800',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 30,
        marginBottom: 20,
        marginTop: 10
    },
    subtitle: {
        fontWeight: 'bold',
        fontSize: 17,
        marginHorizontal: 10
    },
    item: {
        marginHorizontal: 10,
        flexDirection: 'row',
        marginBottom: 10
    },
    total: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        marginTop: 5,
        flex: 2,

    }
});
