import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native';
import { Camera } from 'expo-camera'

import { BarCodeScanner } from 'expo-barcode-scanner';

export default function ViewCamera({ navigation }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <Text>Requisitando permissão para ter acesso à camera.</Text>
    }
    if (hasPermission === false) {
        return <Text>A permissão de acesso à câmera foi negada</Text>
    }
    return (
        <SafeAreaView style={styles.container}>
            <Camera>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : setScanned(true)}
                />
                {scanned && navigation.navigate("Illumination")}

            </Camera>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
});