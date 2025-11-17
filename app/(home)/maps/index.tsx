import React, { useRef, useState } from "react";  //useRef permite almacenar valores que 
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { router, useFocusEffect } from "expo-router";  //useFocusEffect detecta cuando una pantalla está visible
import { WebView, WebViewNavigation } from "react-native-webview";  //muestra páginas web dentro de la app 

//ESTILOS
const styles = StyleSheet.create({
    PrincipalContainer: { //Grupo de elementos
        flex: 1,
        backgroundColor: '#000000'
    },
    searchContainer: {
        flexDirection: 'row', // Elementos en fila (horizontal)
        padding: 10,
        backgroundColor: '#1a1a1a',
        alignItems: 'center', // Centra verticalmente
        gap: 10, // Espacio entre input y botón
    },
    searchInput: {
        flex: 1, // Ocupa todo el espacio disponible
        backgroundColor: '#ffffff',
        borderRadius: 8,
        paddingHorizontal: 15, // Padding izquierda/derecha
        paddingVertical: 10, // Padding arriba/abajo
        fontSize: 16,
        color: '#464545ff'
    },
    searchButton: {
        backgroundColor: '#3498db',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
    },
    textSearchButton: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#ffff'
    },
    mapContainer: {
        flex: 1 //Ocupa todo el espacio restante
    },
    parrafo: {
        color: '#ffff',
        fontSize: 15,
        fontWeight: 'bold',
        // fontStyle: 'italic',
        // textAlign: 'justify',
        textAlign: 'center',
        // position: 'static',
        position: 'relative'
    }
})

const mapsPage = () => {
    const [searchQuery, setSearchQuery] = useState(''); //Esta variable guarda lo que el usuario escribe en el buscador, comenzará vacio
    const [mapUrl, setMapUrl] = useState('https://www.google.com/maps'); //Guarda la url que se mostrará

    const alertShown = useRef(false); //mostrar mensaje
    const lastPlaceUrl = useRef(''); //ultimo lugar de la url
    const isScreenFocused = useRef(true); //Indica si la pantalla esta en maps (true) o en otra (false)
    const ciudadSeleccionada = useRef(''); //guardar la ciudad seleccionada

    useFocusEffect(
        React.useCallback(() => {
            isScreenFocused.current = true; //el usuario está en Maps, alert puede aparecer

            return () => {  //El usuario navega a misiones, entonces alerts no aparece
                isScreenFocused.current = false;
            };
        }, [])
    )

    const EjecutarSearch = () => {
        if (searchQuery.trim()) { //Si hiciste una busqueda (el trim() quita los espacios en blanco, solo busca si escribiste algo)
            const QueryCodificado = encodeURIComponent(searchQuery); //convierte el texto para que sea posible buscarlo en google maps
            setMapUrl(`https://www.google.com/maps/search/${QueryCodificado}`)

            ciudadSeleccionada.current = searchQuery.trim();

            alertShown.current = false;
            lastPlaceUrl.current = '';
        }
    }

    const selectPlace = (navState: WebViewNavigation) => { //navstate es un parámetro que webview crea automáticamente,
        //lo envia cada vez que cambia la url dentro del webview, contiene la información sobre la navegación

        if (!isScreenFocused.current) { //si no estás en la pantalla de maps (no es true)
            return; //entonces no mostrará alert
        }

        if (navState.url.includes('/place/')) {  //Si la URL contiene "/place/" (que es parte normal en el url oficial de google maps al seleccionar un lugar)

            if (alertShown.current) {
                return;
            }

            if (lastPlaceUrl.current == navState.url) {  //revisa si está en la misma url
                return;
            }

            if (navState.url.includes('?t=')) {
                return;
            }

            alertShown.current = true;
            lastPlaceUrl.current = navState.url;

            Alert.alert( //Muestra una ventana emergente 
                'Lugar seleccionado',
                '¿Quieres ver las misiones disponibles aquí?',
                [
                    { //BOTÓN 1: VER MISIONES
                        text: 'Ver misiones',
                        onPress: () => {
                            // router.push('/(home)/misions');
                            const ciudad = ciudadSeleccionada.current || 'Ciudad desconocida';

                            router.push({
                                pathname: '/(home)/misions',
                                params: {ciudad: ciudad

                            }});

                            alertShown.current = false;
                            lastPlaceUrl.current = '';
                        }
                    },
                    { //BOTÓN 2: Cancelar
                        text: 'Cancelar',
                        onPress: () => {
                            const lastUrl = mapUrl.includes('/search/') //con este decide que URL usar
                                ? mapUrl // si mapUrl tiene "/search/" en el url, entonces se mantiene
                                : 'https://www.google.com/maps'; //Si no, te direcciona a la pagina principal de google maps
                            setMapUrl(lastUrl + '?t=' + Date.now())
                            // ? indica que vienen "parámetros" en la URL
                            // t es el Nombre del parámetro (podría ser cualquier letra)
                            // = asigna un valor al parámetro
                            //finalmente, Date.now() es un "número único instantáneo" 
                            // que usamos para engañar al WebView y hacerle pensar 
                            // que cada URL es nueva, aunque en realidad sea la misma 
                            // página. DE ESTA FORMA SE EVITA QUE EL MENSAJE ALERT APAREZCA 2 VECES

                            if (!mapUrl.includes('/search/')) {
                                setSearchQuery('');
                            }
                            // setSearchQuery('');

                            // setMapUrl('https://www.google.com/maps')
                            // setMapUrl('https://www.google.com/maps?t=' + Date.now())
                        }
                    },
                ]
            )
        }
    }

    return (
        <View style={styles.PrincipalContainer}>
            <View style={styles.searchContainer}>
                <TextInput style={styles.searchInput}
                    placeholder="¿A donde quieres ir?"
                    // placeholderTextColor="#888"
                    placeholderTextColor='#464545ff'
                    value={searchQuery}
                    onChangeText={setSearchQuery} // Al escribir, actualiza searchQuery
                    onSubmitEditing={EjecutarSearch} // Al presionar Enter, busca
                />
                <TouchableOpacity style={styles.searchButton} onPress={EjecutarSearch}>
                    <Text style={styles.textSearchButton}>Buscar</Text>
                </TouchableOpacity>
            </View>

            <WebView style={styles.mapContainer}
                source={{ uri: mapUrl }} // uri: mapUrl Carga la URL guardada en mapUrl
                onNavigationStateChange={selectPlace} //Se ejecuta AUTOMÁTICAMENTE cada vez que cambia la URL dentro del WebView
            />
            {/* <Text style={styles.parrafo}>MAPS</Text> */}
        </View>
    )
}

export default mapsPage;