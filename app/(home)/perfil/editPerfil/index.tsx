import React, { useState, useEffect } from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View, Alert } from "react-native";
import { router } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';

//ESTILOS - Define la apariencia visual de todos los elementos
const styles = StyleSheet.create({
    // Contenedor principal con fondo negro
    PrincipalContainer: {
        flex: 1,
        backgroundColor: '#000000'
    },
    // Título superior "PERFIL" con línea azul
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
    // Sección gris oscura superior (nombre de usuario y foto)
    userSection: {
        backgroundColor: '#1a1a1a',
        borderRadius: 15,
        padding: 20,
        margin: 15,
        marginBottom: 20
    },
    // Organiza horizontalmente el nombre de usuario y la foto
    userHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    // Contenedor para el campo de nombre de usuario
    userInfo: {
        flex: 1
    },
    // Etiqueta pequeña sobre los campos
    label: {
        color: '#ffffff',
        fontSize: 12,
        marginBottom: 5
    },
    // Campo de entrada para el nombre de usuario
    usernameInput: {
        backgroundColor: '#2a2a2a',
        borderRadius: 8,
        padding: 12,
        color: '#ffffff',
        fontSize: 16,
        marginBottom: 15
    },
    // Botón pequeño azul "Guardar" (junto al nombre de usuario)
    saveButton: {
        backgroundColor: '#4a5fb5',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 8,
        alignItems: 'center'
    },
    // Texto del botón pequeño
    saveButtonText: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: '600'
    },
    // Imagen de perfil circular
    fotoPerfil: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginLeft: 15
    },
    // Contenedor que envuelve la foto para poder poner el ícono encima
    photoContainer: {
        position: 'relative'
    },
    // Ícono de lápiz que aparece sobre la foto
    editIcon: {
        position: 'absolute',
        right: 0,
        top: 0,
        backgroundColor: '#4a5fb5',
        borderRadius: 12,
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    // Símbolo del lápiz
    editIconText: {
        color: '#ffffff',
        fontSize: 14
    },
    // Sección negra con todos los datos personales
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
    // Cada grupo de campo (etiqueta + input)
    inputGroup: {
        marginBottom: 20
    },
    // Etiqueta de cada campo
    inputLabel: {
        color: '#ffffff',
        fontSize: 14,
        marginBottom: 8
    },
    // Campo de entrada de texto editable
    input: {
        backgroundColor: '#2a2a2a',
        borderRadius: 8,
        padding: 12,
        color: '#ffffff',
        fontSize: 15
    },
    // Botón grande "Guardar" al final de los datos personales
    saveButtonBottom: {
        backgroundColor: '#4a5fb5',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    // Botón "Cancelar" gris
    cancelButton: {
        backgroundColor: '#666666',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
        marginHorizontal: 20,
        marginBottom: 30
    },
    // Texto del botón cancelar
    cancelButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold'
    }
})

const editPerfilPage = () => {
    // Estados - Variables que guardan los valores de cada campo del formulario
    const [username, setUsername] = useState("");
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [fechaNacimiento, setFechaNacimiento] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [fotoPerfil, setFotoPerfil] = useState("");

    // Se ejecuta cuando se carga la pantalla - Carga los datos guardados
    useEffect(() => {
        cargarDatosUsuario();
        solicitarPermisoGaleria();
    }, []);

    // Función que pide permiso para acceder a la galería del teléfono
    const solicitarPermisoGaleria = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permiso necesario', 'Necesitamos permiso para acceder a tu galería');
        }
    };

    // Función que carga los datos del usuario guardados en el dispositivo
    const cargarDatosUsuario = async () => {
        try {
            // Obtenemos los datos guardados
            const datosGuardados = await AsyncStorage.getItem('datosUsuario');
            
            if (datosGuardados !== null) {
                // Convertimos el texto a objeto
                const datos = JSON.parse(datosGuardados);
                // Llenamos todos los campos con los datos guardados
                setUsername(datos.username);
                setNombre(datos.nombre);
                setEmail(datos.email);
                setTelefono(datos.telefono);
                setFechaNacimiento(datos.fechaNacimiento);
                setCiudad(datos.ciudad);
                setFotoPerfil(datos.fotoPerfil);
            } else {
                // Si no hay datos guardados, usamos valores por defecto
                setUsername("Giga Chad");
                setNombre("Juan Pérez");
                setEmail("juanperez@email.com");
                setTelefono("3101234567");
                setFechaNacimiento("21/05/2000");
                setCiudad("Tunja, Boyacá");
                setFotoPerfil("https://static.vecteezy.com/system/resources/thumbnails/046/003/267/small/man-with-glasses-sitting-in-front-of-laptop-free-photo.jpeg");
            }
        } catch (error) {
            console.log('Error al cargar datos:', error);
        }
    };

    // Función que guarda solo el nombre de usuario
    const handleSaveUsername = async () => {
        try {
            // Primero obtenemos todos los datos actuales
            const datosActuales = await AsyncStorage.getItem('datosUsuario');
            let datos = datosActuales ? JSON.parse(datosActuales) : {};
            
            // Actualizamos solo el username
            datos.username = username;
            
            // Guardamos de nuevo todos los datos
            await AsyncStorage.setItem('datosUsuario', JSON.stringify(datos));
            Alert.alert("Éxito", "Nombre de usuario guardado");
        } catch (error) {
            Alert.alert("Error", "No se pudo guardar el nombre de usuario");
        }
    };

    // Función que guarda TODOS los datos del perfil
    const handleSaveAllData = async () => {
        try {
            // Creamos un objeto con todos los datos del formulario
            const datosUsuario = {
                username,
                nombre,
                email,
                telefono,
                fechaNacimiento,
                ciudad,
                fotoPerfil
            };
            
            // Guardamos el objeto completo en el dispositivo
            await AsyncStorage.setItem('datosUsuario', JSON.stringify(datosUsuario));
            
            // Mostramos mensaje de éxito
            Alert.alert("Éxito", "Todos los datos han sido guardados", [
                {
                    text: "OK",
                    // Cuando el usuario presiona OK, volvemos a la página de perfil
                    onPress: () => router.back()
                }
            ]);
        } catch (error) {
            Alert.alert("Error", "No se pudieron guardar los datos");
        }
    };

    // Función que permite al usuario seleccionar una foto de la galería
    const handleChangePhoto = async () => {
        try {
            // Abrimos la galería del teléfono
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images, // Solo imágenes
                allowsEditing: true, // Permite recortar la imagen
                aspect: [1, 1], // Recorte cuadrado
                quality: 0.8, // Calidad de la imagen (0-1)
            });

            // Si el usuario no canceló la selección
            if (!result.canceled) {
                // Actualizamos la foto con la nueva imagen seleccionada
                setFotoPerfil(result.assets[0].uri);
            }
        } catch (error) {
            Alert.alert("Error", "No se pudo seleccionar la imagen");
        }
    };

    // Función que cancela la edición y vuelve a la pantalla anterior
    const handleCancel = () => {
        router.back();
    };

    return (
        <ScrollView style={styles.PrincipalContainer}>
            <View>
                {/* Título de la página */}
                <Text style={styles.headerTitle}>PERFIL</Text>
                
                {/* Sección superior con nombre de usuario y foto */}
                <View style={styles.userSection}>
                    <View style={styles.userHeader}>
                        {/* Lado izquierdo: Campo editable de nombre de usuario */}
                        <View style={styles.userInfo}>
                            <Text style={styles.label}>Nombre de usuario</Text>
                            <TextInput
                                style={styles.usernameInput}
                                value={username}
                                onChangeText={setUsername} // Actualiza el estado cuando el usuario escribe
                                placeholder="Ingresa tu nombre de usuario"
                                placeholderTextColor="#888888"
                            />
                            {/* Botón para guardar solo el nombre de usuario */}
                            <Pressable onPress={handleSaveUsername} style={styles.saveButton}>
                                <Text style={styles.saveButtonText}>Guardar</Text>
                            </Pressable>
                        </View>
                        {/* Lado derecho: Foto de perfil con botón para cambiarla */}
                        <Pressable onPress={handleChangePhoto}>
                            <View style={styles.photoContainer}>
                                <Image source={{ uri: fotoPerfil }} style={styles.fotoPerfil}/>
                                {/* Ícono de lápiz para editar */}
                                <View style={styles.editIcon}>
                                    <Text style={styles.editIconText}>✎</Text>
                                </View>
                            </View>
                        </Pressable>
                    </View>
                </View>

                {/* Sección de datos personales editables */}
                <View style={styles.personalDataSection}>
                    <Text style={styles.sectionTitle}>DATOS PERSONALES</Text>
                    
                    {/* Campo editable: Nombre completo */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.inputLabel}>Nombre completo</Text>
                        <TextInput
                            style={styles.input}
                            value={nombre}
                            onChangeText={setNombre}
                            placeholder="Ingresa tu nombre completo"
                            placeholderTextColor="#888888"
                        />
                    </View>

                    {/* Campo editable: Correo */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.inputLabel}>Correo</Text>
                        <TextInput
                            style={styles.input}
                            value={email}
                            onChangeText={setEmail}
                            placeholder="Ingresa tu correo"
                            placeholderTextColor="#888888"
                            keyboardType="email-address" // Teclado optimizado para emails
                        />
                    </View>

                    {/* Campo editable: Teléfono */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.inputLabel}>Número de teléfono (opcional)</Text>
                        <TextInput
                            style={styles.input}
                            value={telefono}
                            onChangeText={setTelefono}
                            placeholder="Ingresa tu número de teléfono"
                            placeholderTextColor="#888888"
                            keyboardType="phone-pad" // Teclado numérico para teléfonos
                        />
                    </View>

                    {/* Campo editable: Fecha de nacimiento */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.inputLabel}>Fecha de nacimiento</Text>
                        <TextInput
                            style={styles.input}
                            value={fechaNacimiento}
                            onChangeText={setFechaNacimiento}
                            placeholder="DD/MM/AAAA"
                            placeholderTextColor="#888888"
                        />
                    </View>

                    {/* Campo editable: Ciudad */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.inputLabel}>Ciudad / Ubicación actual</Text>
                        <TextInput
                            style={styles.input}
                            value={ciudad}
                            onChangeText={setCiudad}
                            placeholder="Ingresa tu ciudad"
                            placeholderTextColor="#888888"
                        />
                    </View>

                    {/* Botón para guardar todos los cambios */}
                    <Pressable onPress={handleSaveAllData} style={styles.saveButtonBottom}>
                        <Text style={styles.saveButtonText}>Guardar</Text>
                    </Pressable>
                </View>

                {/* Botón para cancelar y volver sin guardar */}
                <Pressable onPress={handleCancel} style={styles.cancelButton}>
                    <Text style={styles.cancelButtonText}>Cancelar</Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}

export default editPerfilPage;