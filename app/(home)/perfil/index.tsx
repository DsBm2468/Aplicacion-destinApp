import React, { useState } from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";

//ESTILOS
const styles = StyleSheet.create({
    PrincipalContainer: { //Grupo de elementos
        flex: 1,
        backgroundColor: '#000000'
    },
    SecundaryContainer: {
        backgroundColor: '#222222ff',
        // borderColor: '#464545ff',
        borderRadius: 10,
        // borderWidth: 2,
        // padding: 25,
        padding: 20,
        margin: 10,
        marginBottom: 12
    },
    subtitulo: {
        color: '#ffff',
        fontSize: 22,
        fontWeight: 'bold',
        // textAlign: 'justify',
        textAlign: 'justify',
        marginBottom: 25,
        paddingLeft: 18
        // paddingBottom: 22,
    },
    subtituloInferior: {
        color: '#ffff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'justify',
        // textAlign: 'center',
        //marginBottom: 10,
        // marginTop: 20
        paddingLeft: 18,
        // paddingRight: 390,
        // paddingBottom: 22,
    },
    parrafoInfo: {
        color: '#ffff',
        fontSize: 15,
        // fontWeight: 'bold',
        // fontStyle: 'italic',
        // textAlign: 'justify',
        textAlign: 'justify',
        // position: 'static',
        position: 'relative',
        // marginTop: 5
        // left: 95, //vh es viewport height
        // bottom: 19,
        paddingLeft: 18,
        // paddingRight: 390,
        // bottom:5, //vh es viewport height
    },
    fotoPerfil: {
        width: 120,
        height: 120,
        borderRadius: 60,
        alignSelf: 'center',


    },
    button: {
        backgroundColor: '#3498db',
        paddingLeft: 18,
        paddingRight: 28,
        // marginRight:280,
        marginRight: 196,
        margin: 20,
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center'
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#ffff',
        alignItems: 'center'
    }
})

const perfilPage = () => {
    const [paginaActual, setPaginaActual] = useState('favoritos');

    const usuario = {
        nombre: "Juan Pérez",
        username: "EL",
        fechaRegistro: "12 DE NOVIEMBRE",
        fotoPerfil: "https://static.vecteezy.com/system/resources/thumbnails/046/003/267/small/man-with-glasses-sitting-in-front-of-laptop-free-photo.jpeg"
    };

    return (
        <ScrollView style={styles.PrincipalContainer}>
            <View>
                <Text style={styles.subtitulo}>Perfil</Text>
                <View style={styles.SecundaryContainer}>
                    <Image source={{ uri: usuario.fotoPerfil }} style={styles.fotoPerfil}/>
                    <Text style={styles.subtituloInferior}>Nombre:</Text><Text style={styles.parrafoInfo}>{usuario.nombre}</Text>
                    <Text style={styles.subtituloInferior}>Usuario:</Text><Text style={styles.parrafoInfo}>{usuario.username}</Text>
                    <Text style={styles.subtituloInferior}>Miembro desde:</Text><Text style={styles.parrafoInfo}>{usuario.fechaRegistro}</Text>
                    <Pressable onPress={() => router.push('/(home)/perfil/editPerfil')} style={styles.button}>
                        <Text style={styles.textButton}>Editar perfil</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    )
}

export default perfilPage;