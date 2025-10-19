import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";

//Estilos
const styles = StyleSheet.create({
    page: {
        color: '#000'
    },
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
        textAlign: 'center',
        fontWeight: 'bold'
    },

    //VIÑETAS
    bulletPoint: { //forma de la viñeta
        color: '#000000ff',
        marginRight: 10,
        lineHeight: 24, // Ajusta la altura de la línea para alinear el punto
    },
    bulletText: { //texto de la viñeta
        color: '#000000ff',
    },
})

const welcomePage = () => {
    return <View>
        <Text style={styles.titulo}>Bienvenido a Destinapp</Text>
        <Text style={styles.subtitulo}>¿Qué es la app?</Text>
        <br></br>
        <Text>
            Es una aplicación de viajes basada en misiones interactivas 
            que te invitan a descubrir lugares, culturas y experiencias 
            de forma única.
        <br></br>
        <br></br>
            Combina exploración, gamificación y comunidad para transformar 
            cada destino en una aventura personalizada.
        </Text>
        <br></br>
        <Text style={styles.subtitulo}>¿Cómo funciona?</Text>
        <br></br>
        <Text style={styles.bulletPoint}>•
            <Text style={styles.bulletText}>
                Explora misiones disponibles en tu zona o en el destino que 
                visitarás, y actívalas mientras viajas.
            </Text>
        </Text>

        <br></br>

        <Text style={styles.bulletPoint}>•
            <Text style={styles.bulletText}>
                Completa retos al visitar sitios, realizar tareas específicas, 
                y registra tu progreso en tiempo real.
            </Text>
        </Text>

        <br></br>

        <Text style={styles.bulletPoint}>•
            <Text style={styles.bulletText}>
                Ideal para descubrir nuevos lugares de forma dinámica, tanto 
                si viajas solo como en grupo.
            </Text>
        </Text>

        <br></br>

        <Text style={styles.bulletPoint}>•
            <Text style={styles.bulletText}>
                La barra de progreso de las misiones se llenará mientras más 
                cerca estes de la ubicación una vez aceptada la misión.
            </Text>
        </Text>

        <br></br>

        <Text style={styles.bulletPoint}>•
            <Text style={styles.bulletText}>
                Las misiones se completarán una vez llegado a la ubicación 
                especificada por cada una de estas.
            </Text>
        </Text>

        <br></br>
        
        <Button
          title = "Comenzar"
          onPress = {() => router.navigate('/login')}
        />
    </View>
}

export default welcomePage;