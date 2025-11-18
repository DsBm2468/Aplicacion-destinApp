import React, { useState, useCallback } from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { router, useFocusEffect } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';

//ESTILOS - Aquí definimos cómo se ve cada elemento de la pantalla
const styles = StyleSheet.create({
    // Contenedor principal que ocupa toda la pantalla con fondo negro
    PrincipalContainer: {
        flex: 1,
        backgroundColor: '#000000'
    },
    // Título "PERFIL" en la parte superior con línea azul debajo
    headerTitle: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 15,
        borderBottomWidth: 2,
        borderBottomColor: '#0066ff',
        marginBottom: 20
    },
    // Sección gris oscura que contiene el nombre de usuario y la foto
    userSection: {
        backgroundColor: '#1a1a1a',
        borderRadius: 15,
        padding: 20,
        margin: 15,
        marginBottom: 20
    },
    // Organiza el nombre de usuario y la foto en horizontal
    userHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    // Espacio para la información del usuario (nombre de usuario)
    userInfo: {
        flex: 1
    },
    // Etiqueta pequeña que dice "Nombre de usuario"
    label: {
        color: '#ffffff',
        fontSize: 12,
        marginBottom: 5
    },
    // Caja donde se muestra el nombre de usuario
    usernameContainer: {
        backgroundColor: '#2a2a2a',
        borderRadius: 8,
        padding: 12
    },
    // Texto del nombre de usuario
    username: {
        color: '#ffffff',
        fontSize: 16
    },
    // Foto de perfil circular
    fotoPerfil: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginLeft: 15
    },
    // Sección negra que contiene todos los datos personales
    personalDataSection: {
        backgroundColor: '#0a0a0a',
        padding: 20,
        paddingTop: 25
    },
    // Título "DATOS PERSONALES"
    sectionTitle: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center'
    },
    // Grupo que contiene cada campo de información (nombre, correo, etc)
    dataGroup: {
        marginBottom: 20
    },
    // Etiqueta de cada campo (Nombre completo, Correo, etc)
    dataLabel: {
        color: '#ffffff',
        fontSize: 14,
        marginBottom: 8
    },
    // Texto que muestra el valor de cada campo
    dataValue: {
        backgroundColor: '#2a2a2a',
        borderRadius: 8,
        padding: 12,
        color: '#ffffff',
        fontSize: 15
    },
    // Botón azul "Editar perfil"
    editButton: {
        backgroundColor: '#4a5fb5',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 20
    },
    // Texto del botón "Editar perfil"
    editButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    // Botón rojo "Cerrar sesión"
    logoutButton: {
        backgroundColor: '#d32f2f',
        paddingVertical: 15,
        borderRadius: 25,
        alignItems: 'center',
        marginTop: 10,
        marginHorizontal: 20,
        marginBottom: 30
    },
    // Texto del botón "Cerrar sesión"
    logoutButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold'
    }
})

const perfilPage = () => {
    // Estado para almacenar los datos del usuario que se mostrarán en pantalla
    const [usuario, setUsuario] = useState({
        nombre: "Juan Pérez",
        username: "Giga Chad",
        email: "juanperez@email.com",
        telefono: "3101234567",
        fechaNacimiento: "21/05/2000",
        ciudad: "Tunja, Boyacá",
        fotoPerfil: "https://static.vecteezy.com/system/resources/thumbnails/046/003/267/small/man-with-glasses-sitting-in-front-of-laptop-free-photo.jpeg"
    });

    // useFocusEffect se ejecuta cada vez que la pantalla recibe foco (cuando vuelves a ella)
    // Esto permite que los datos se actualicen en tiempo real
    useFocusEffect(
        useCallback(() => {
            cargarDatosUsuario();
        }, [])
    );

    // Función que carga los datos del usuario desde el almacenamiento del dispositivo
    const cargarDatosUsuario = async () => {
        try {
            // Intentamos obtener los datos guardados
            const datosGuardados = await AsyncStorage.getItem('datosUsuario');
            
            // Si hay datos guardados, los convertimos de texto a objeto y actualizamos el estado
            if (datosGuardados !== null) {
                setUsuario(JSON.parse(datosGuardados));
            }
        } catch (error) {
            // Si hay un error al cargar, lo mostramos en consola
            console.log('Error al cargar datos del usuario:', error);
        }
    };

    return (
        <ScrollView style={styles.PrincipalContainer}>
            <View>
                {/* Título de la página */}
                <Text style={styles.headerTitle}>PERFIL</Text>
                
                {/* Sección superior con nombre de usuario y foto */}
                <View style={styles.userSection}>
                    <View style={styles.userHeader}>
                        {/* Lado izquierdo: Nombre de usuario */}
                        <View style={styles.userInfo}>
                            <Text style={styles.label}>Nombre de usuario</Text>
                            <View style={styles.usernameContainer}>
                                <Text style={styles.username}>{usuario.username}</Text>
                            </View>
                        </View>
                        {/* Lado derecho: Foto de perfil */}
                        <View>
                            <Image source={{ uri: usuario.fotoPerfil }} style={styles.fotoPerfil}/>
                        </View>
                    </View>
                </View>

                {/* Sección de datos personales */}
                <View style={styles.personalDataSection}>
                    <Text style={styles.sectionTitle}>DATOS PERSONALES</Text>
                    
                    {/* Campo: Nombre completo */}
                    <View style={styles.dataGroup}>
                        <Text style={styles.dataLabel}>Nombre completo</Text>
                        <View style={styles.usernameContainer}>
                            <Text style={styles.dataValue}>{usuario.nombre}</Text>
                        </View>
                    </View>

                    {/* Campo: Correo electrónico */}
                    <View style={styles.dataGroup}>
                        <Text style={styles.dataLabel}>Correo</Text>
                        <View style={styles.usernameContainer}>
                            <Text style={styles.dataValue}>{usuario.email}</Text>
                        </View>
                    </View>

                    {/* Campo: Teléfono */}
                    <View style={styles.dataGroup}>
                        <Text style={styles.dataLabel}>Número de teléfono (opcional)</Text>
                        <View style={styles.usernameContainer}>
                            <Text style={styles.dataValue}>{usuario.telefono}</Text>
                        </View>
                    </View>

                    {/* Campo: Fecha de nacimiento */}
                    <View style={styles.dataGroup}>
                        <Text style={styles.dataLabel}>Fecha de nacimiento</Text>
                        <View style={styles.usernameContainer}>
                            <Text style={styles.dataValue}>{usuario.fechaNacimiento}</Text>
                        </View>
                    </View>

                    {/* Campo: Ciudad/Ubicación */}
                    <View style={styles.dataGroup}>
                        <Text style={styles.dataLabel}>Ciudad / Ubicación actual</Text>
                        <View style={styles.usernameContainer}>
                            <Text style={styles.dataValue}>{usuario.ciudad}</Text>
                        </View>
                    </View>
                </View>

                {/* Botón para ir a la pantalla de edición */}
                <Pressable onPress={() => router.push('/(home)/perfil/editPerfil')} style={styles.editButton}>
                    <Text style={styles.editButtonText}>Editar perfil</Text>
                </Pressable>

                {/* Botón para cerrar sesión */}
                <Pressable style={styles.logoutButton}>
                    <Text style={styles.logoutButtonText}>Cerrar sesión</Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}

export default perfilPage;