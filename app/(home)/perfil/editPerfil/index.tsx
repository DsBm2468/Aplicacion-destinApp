import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";

//ESTILOS
const styles = StyleSheet.create({
  PrincipalContainer: { //Grupo de elementos
    // flex: 1,
    backgroundColor: '#000000'
  },
  titulo: {
    color: '#ffff',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 45,
    marginBottom: 20
  },
  subtitulo: {
    color: '#ffff',
    fontSize: 22,
    fontWeight: 'bold',
    // textAlign: 'justify',
    textAlign: 'center',
    marginBottom: 25
    // paddingBottom: 22,
  },
  subtituloInferior: {
    color: '#ffff',
    fontSize: 18,
    fontWeight: 'bold',
    // textAlign: 'justify',
    textAlign: 'center',
    //marginBottom: 10,
    // marginTop: 20
    // paddingLeft: 0,
    // paddingRight: 390,
    // paddingBottom: 22,
  },
  parrafoInfo: {
    color: '#ffff',
    fontSize: 15,
    fontWeight: 'bold',
    fontStyle: 'italic',
    // textAlign: 'justify',
    textAlign: 'center',
    // position: 'static',
    position: 'relative',
    // marginTop: 5
    // left: 95, //vh es viewport height
    // bottom: 19,
    // paddingLeft: 0,
    // paddingRight: 390,
    // bottom:5, //vh es viewport height
  },
  containerCarrusel: {
    backgroundColor: '#222222ff',
    borderColor: '#464545ff',
    borderRadius: 10,
    borderWidth: 2,
    // padding: 25,
    padding: 20,
    margin: 10,
  }
});

const editPerfilPage = () => {
    return (
        <ScrollView style={styles.PrincipalContainer}>
            <View>
                <Text style={styles.subtitulo}>EDITAR PERFIL</Text>
            </View>
        </ScrollView>

    )
}

export default editPerfilPage;