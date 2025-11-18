import { router } from "expo-router";
import React from "react";
<<<<<<< Updated upstream
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// Estilos mejorados
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    titulo: {
        color: '#ffffff',
        fontSize: 32,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 45,
        marginBottom: 30,
        letterSpacing: 0.5,
    }
})

const LoadingPage = () => {
    return <View style={styles.container}>
        <TouchableOpacity onPress={() => router.push('/(start)/welcome')}>
            <Text style={styles.titulo}>CARGANDO...</Text>
        </TouchableOpacity>
    </View>
=======
import { Text, View } from "react-native";
import WelcomePage from "./(start)/welcome";

const LoadingPage = () => {
    return <WelcomePage>
    </WelcomePage>
>>>>>>> Stashed changes
}

export default LoadingPage;


//NUEVO
// import React, {useEffect, useState} from "react";
// import { ActivityIndicator, Text, View } from "react-native";
// import { useRouter } from "expo-router";


// const LoadingPage = () => {
//     const router = useRouter();//permite el cambio de pantalla
//     const [loading, setLoading] = useState(true); //Indica si la pagina está cargando, inicialmente la respuesta es true
//     const [progresoCarga, setProgresoCarga] = useState(0); //Indica el porcentaje de carga, iniciando en 0%

//     const inicioCarga = () => {
//         let porcentajeActual = 0;

//         const actualizarProcentaje = () => {
//             porcentajeActual += 0.1; //se refiere a que a este valor se le suma 0.1
//             //Así se mostrará que el porcentaje de carga avanza el 10%
//             setProgresoCarga(porcentajeActual); //Actualiza el proceso de carga con el porcentaje actual
//         }
//     }

//     useEffect(() => { //useEffect indica cuando ejecutar el código

//     })
//     return <View>
//         <Text>CARGANDO...</Text>
//     </View>
// }

// export default LoadingPage;