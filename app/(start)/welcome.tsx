import React from "react";
import { Button, StyleSheet, Text, View, ScrollView, TouchableOpacity, Pressable } from "react-native";
import { router } from "expo-router";

// Estilos mejorados
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    scrollContainer: {
        flexGrow: 1,
        paddingHorizontal: 25,
        paddingVertical: 40,
    },
    page: {
        color: '#ffffff',
    },
    parrafo: {
        color: '#ffffff',
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 24,
        marginBottom: 15,
    },
    titulo: {
        color: '#ffffff',
        fontSize: 32,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 30,
        letterSpacing: 0.5,
    },
    subtitulo: {
        color: '#ffffff',
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 30,
    },
    bulletContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    bulletPoint: {
        color: '#3498db',
        fontSize: 18,
        marginRight: 12,
        marginTop: 2,
        fontWeight: 'bold',
    },
    bulletText: {
        color: '#ffffff',
        fontSize: 15,
        lineHeight: 22,
        flex: 1,
        textAlign: 'left',
    },
    buttonContainer: {
        marginTop: 40,
        marginBottom: 30,
        paddingHorizontal: 20,
    },
    elegantButton: {
        backgroundColor: '#3498db',
        borderRadius: 25,
        paddingVertical: 16,
        paddingHorizontal: 30,
        shadowColor: '#3498db',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.6,
        shadowRadius: 15,
        elevation: 10,
        borderWidth: 1,
        borderColor: '#2980b9',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        letterSpacing: 1,
    },
    contentText: {
        color: '#e0e0e0',
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 24,
        marginBottom: 20,
    },
    divider: {
        height: 1,
        backgroundColor: '#333333',
        marginVertical: 25,
        marginHorizontal: 20,
    }
});

const WelcomePage = () => {
    return (
        <View style={styles.container}>
            <ScrollView 
                contentContainerStyle={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
            >
                <Text style={styles.titulo}>Bienvenido a Destinapp</Text>
                
                <Text style={styles.subtitulo}>¿Qué es la app?</Text>
                
                <Text style={styles.contentText}>
                    Es una aplicación de viajes basada en misiones interactivas 
                    que te invitan a descubrir lugares, culturas y experiencias 
                    de forma única.
                </Text>
                
                <Text style={styles.contentText}>
                    Combina exploración, gamificación y comunidad para transformar 
                    cada destino en una aventura personalizada.
                </Text>

                <View style={styles.divider} />

                <Text style={styles.subtitulo}>¿Cómo funciona?</Text>
                
                <View style={styles.bulletContainer}>
                    <Text style={styles.bulletPoint}>•</Text>
                    <Text style={styles.bulletText}>
                        Explora misiones disponibles en tu zona o en el destino que 
                        visitarás, y actívalas mientras viajas.
                    </Text>
                </View>

                <View style={styles.bulletContainer}>
                    <Text style={styles.bulletPoint}>•</Text>
                    <Text style={styles.bulletText}>
                        Completa retos al visitar sitios, realizar tareas específicas, 
                        y registra tu progreso en tiempo real.
                    </Text>
                </View>

                <View style={styles.bulletContainer}>
                    <Text style={styles.bulletPoint}>•</Text>
                    <Text style={styles.bulletText}>
                        Ideal para descubrir nuevos lugares de forma dinámica, tanto 
                        si viajas solo como en grupo.
                    </Text>
                </View>

                <View style={styles.bulletContainer}>
                    <Text style={styles.bulletPoint}>•</Text>
                    <Text style={styles.bulletText}>
                        La barra de progreso de las misiones se llenará mientras más 
                        cerca estés de la ubicación una vez aceptada la misión.
                    </Text>
                </View>

                <View style={styles.bulletContainer}>
                    <Text style={styles.bulletPoint}>•</Text>
                    <Text style={styles.bulletText}>
                        Las misiones se completarán una vez llegado a la ubicación 
                        especificada por cada una de estas.
                    </Text>
                </View>

                <View style={styles.buttonContainer}>
                    <Pressable 
                        style={styles.elegantButton}
                        onPress={() => router.navigate('/login')}
                    >
                        <Text style={styles.buttonText}>COMENZAR</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </View>
    );
}

export default WelcomePage;