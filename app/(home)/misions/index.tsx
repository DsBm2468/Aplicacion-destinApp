import React, { useEffect, useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

//ESTILOS
const styles = StyleSheet.create({
    PrincipalContainer: { //Grupo de elementos
        flex: 1,
        backgroundColor: '#000000'
    },
    subtitulo: {
        color: '#ffff',
        fontSize: 22,
        fontWeight: 'bold',
        // textAlign: 'justify',
        textAlign: 'justify',
        marginTop: 5,
        // marginBottom: 5,
        paddingLeft: 18
    },
    subtituloInferior: {
        color: '#ffff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'justify',
        paddingLeft: 18
        // textAlign: 'center',
        //marginBottom: 10,
        // marginTop: 20
        // paddingLeft: 0,
        // paddingRight: 30,
        // paddingBottom: 22,
    },
    tituloMision: {
        color: '#000000',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'justify',
        paddingLeft: 18,
        // paddingBottom: 15
        // margin: 10,
    },
    parrafoInfo: {
        color: '#000000',
        fontSize: 15,
        // fontWeight: 'bold',
        // fontStyle: 'italic',
        // textAlign: 'justify',
        textAlign: 'justify',
        // position: 'static',
        position: 'relative',
        paddingHorizontal: 12,
    },
    vineta: {
        color: '#000000',
        fontSize: 15,
        fontWeight: 'bold',
        fontStyle: 'italic',
        // textAlign: 'justify',
        textAlign: 'justify',
        // position: 'static',
        position: 'relative',
        padding: 12
    },
    containerMision: {
        backgroundColor: '#ffffffff',
        // borderColor: '#464545ff',
        borderRadius: 10,
        borderWidth: 2,
        // padding: 20,
        // padding: 10,
        paddingTop: 10,
        paddingLeft: -15,
        margin: 15,
        marginBottom: -5
        // marginLeft: 10,
        // marginRight: 10,
        // marginTop: 5,
    },
    botonAceptar: {
        backgroundColor: '#4CAF50',
        padding: 12,
        borderRadius: 8,
        margin: 15,
        alignItems: 'center',
    },
    botonRechazar: {
        backgroundColor: '#f44336',
        padding: 12,
        borderRadius: 8,
        margin: 15,
        alignItems: 'center',
    },
    botonCompletar: {
        backgroundColor: '#2196F3',
        padding: 12,
        borderRadius: 8,
        margin: 15,
        alignItems: 'center',
    },
    botonTexto: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    barraProgresoContainer: {
        height: 20,
        backgroundColor: '#e0e0e0',
        borderRadius: 10,
        margin: 15,
        overflow: 'hidden',
    },
    barraProgreso: {
        height: '100%',
        backgroundColor: '#4CAF50',
        borderRadius: 10,
    },
    textoProgreso: {
        color: '#000000',
        textAlign: 'center',
        fontSize: 12,
        marginTop: 5,
    },
    estadoMision: {
        color: '#ff6b35',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
        paddingHorizontal: 18,
    },
    seccionCompletada: {
        backgroundColor: '#e8f5e8',
        borderColor: '#4CAF50',
    },
    seccionRechazada: {
        backgroundColor: '#ffebee',
        borderColor: '#f44336',
    }
})

// Datos de ejemplo para las misiones
const allMisions = [
    //MISIONES EN PAIPA
    {
        id: 1,
        titulo: "Piscinas termales",
        ciudad: "Paipa",
        descripcion: "Relájate en las famosas aguas termales, las cuales tienen increibles propiedades para la piel.",
        puntos: 20,
        estado: "Disponible",
        progreso: 0
    },
    {
        id: 2,
        titulo: "Pantano de Vargas",
        ciudad: "Paipa",
        descripcion: "Visita uno de los lugares históricos más importantes de Colombia, conociendo a detalle más sobre la feroz battalla ocurrida en esa época que logró la independencia de una nación.",
        puntos: 50,
        estado: "Disponible",
        progreso: 0
    },
]

const misionsPage = () => {
    const parametros = useLocalSearchParams();
    const ciudadFiltro = parametros.lugar as string | undefined;

    // const [misiones, setMisiones] = useState(0);
    const [misiones, setMisiones] = useState(allMisions);

    useEffect(() => {
        if (ciudadFiltro) { //si las misiones seleccionadas coinciden con la ciudad
            const misionesFiltradas = allMisions.filter((misiones) => {
                const ciudadMision = misiones.ciudad.toLowerCase();
                const filtro = ciudadFiltro.toLocaleLowerCase();
                return ciudadMision.includes(filtro) || filtro.includes(ciudadMision);
            })

            setMisiones(misionesFiltradas);
        } else {
            setMisiones(allMisions);
        }
    }, [ciudadFiltro])

    // const aceptarMision = (id) => {
    //     setMisiones(misiones.map(mision => //recorre todas las misiones registradas
    //         allMisions.id == id ? { ...mision} // primero encuentra la misión atraves del id, copia la mision y cambia el estado a aceptada
    //         Alert.alert("Misión Aceptada");
    //     ));
    // }

    // const mostrarMisiones = ({item}) => (
    //     <TouchableOpacity>

    //     </TouchableOpacity>
    // )
    return (
        <ScrollView style={styles.PrincipalContainer}>
            <View>
                <Text style={styles.subtitulo}>Misiones</Text>
                {ciudadFiltro && (
                    <Text style={styles.subtituloInferior}>
                        Misiones en {ciudadFiltro}
                    </Text>
                )}


                {misiones.map((mision) => (
                    <TouchableOpacity key={mision.id} style={styles.containerMision}>
                        <Text style={styles.tituloMision}>{mision.titulo}</Text>
                        <Text style={styles.vineta}>{mision.ciudad}</Text>
                        <Text style={styles.parrafoInfo}>{mision.descripcion}</Text>
                        <Text style={styles.vineta}>
                            Puntos:
                            <Text style={styles.tituloMision}>{mision.puntos}</Text>
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
            {/* <View style={styles.containerMision}>
                <Text style={styles.tituloMisiones}></Text>
                <Text style={styles.parrafoInfo}></Text>
            </View> */}
        </ScrollView>
    )
}

export default misionsPage;