import React from "react";
import { StyleSheet, Text, View } from "react-native";

//Estilos
const styles = StyleSheet.create({
    parrafo: {
        color: '#000000ff',
        fontSize: 16,
        textAlign: 'center'
    },
    titulo: {
        color: '#000000ff',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    subtitulo: {
        color: '#000000ff',
        fontSize: 20,
        textAlign: 'left',
        fontWeight: 'bold'
    }
})

const recoverPwdPage = () => { //recover es recuperar
    return <View>
        <Text style={styles.titulo}>Recupera tu cuenta</Text>
    </View>
}

export default recoverPwdPage;