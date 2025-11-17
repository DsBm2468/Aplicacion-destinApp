import React from "react";
import { StyleSheet } from "react-native";
import { Link, Stack, Tabs } from "expo-router";
// import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const styles = StyleSheet.create({
    // tabBar: {
    //     backgroundColor: '#000000',  // Fondo negro
    //     borderTopColor: '#333333',  // Línea gris oscura arriba
    //     borderTopWidth: 1,           // Grosor de la línea
    //     height: 60,                  // Altura de la barra
    //     paddingBottom: 8,            // Espacio abajo
    //     paddingTop: 8,               // Espacio arriba
    // },
    header: {
        backgroundColor: '#000000',  // Fondo negro del header
    },
})

const HomeLayout = () => { //layout es como una plantilla, yo defino la plantilla para estas páginas.
    const insets = useSafeAreaInsets(); //detectar el espacio de la barra del sistema
    return (
        <Tabs
            screenOptions={{
                //HEADER
                headerShown: true,
                headerStyle: styles.header,
                headerTintColor: '#ffff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 32,
                },

                //BARRA INFERIOR (TABS)
                tabBarActiveTintColor: '#ffff',
                tabBarInactiveTintColor: '#8E8E93',
                // tabBarStyle: styles.tabBar,
                tabBarStyle: {
                    backgroundColor: '#464545ff',
                    height: 80 + insets.bottom,
                    paddingBottom: insets.bottom + 8,
                    paddingTop: 8,
                    // marginTop:30
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '600',
                },
            }}>

            {/* Pantalla de Inicio */}
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Inicio',
                    // title: '',
                    headerTitle: 'DestinApp',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" size={30} color={color} />
                    ),
                }}
            />

            {/* Pantalla de Mapa */}
            <Tabs.Screen
                name="maps/index"
                options={{
                    title: 'Mapa',
                    // title: '',
                    headerTitle: 'DestinApp',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="location" size={30} color={color} />
                        // <ion-icon name="person-circle-sharp" size={size} color={color}></ion-icon>
                    ),
                }}
            />

            {/* Pantalla de Misiones */}
            <Tabs.Screen
                name="misions/index"
                options={{
                    title: 'Misiones',
                    // title: '',
                    headerTitle: 'DestinApp',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="ribbon" size={30} color={color} />
                    ),
                }}
            />

            {/* Pantalla de Perfil */}
            <Tabs.Screen
                name="perfil/index"
                options={{
                    title: 'Perfil',
                    // title: '',
                    headerTitle: 'DestinApp',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person" size={30} color={color} />
                        // <ion-icon name="person-circle-sharp" size={size} color={color}></ion-icon>
                    ),
                }}
            />

            {/* Pantalla de Edición de Perfil */}
            <Tabs.Screen
                name="perfil/editPerfil/index"
                options={{
                    href: null // LO OCULTA DE LA BARRA DE TABS
                }}
            />

        </Tabs>
    )
}

export default HomeLayout;



























// import React from "react";
// import { StyleSheet, Text, View } from "react-native";
// import { Link, Stack, Tabs } from "expo-router";
// import { ColorSpace } from "react-native-reanimated";
// import { Ionicons } from "@expo/vector-icons";

// const styles = StyleSheet.create({
//     PrincipalContainer: { //Grupo de elementos
//         flex: 1,
//         backgroundColor: '#000000'
//     },
//     titulo: {
//         color: '#ffff',
//         fontSize: 32,
//         fontWeight: 'bold',
//         textAlign: 'center',
//         marginTop: 45,
//         marginBottom: 20
//     },
//     subtitulo: {
//         color: '#ffff',
//         fontSize: 22,
//         fontWeight: 'bold',
//         // textAlign: 'justify',
//         textAlign: 'center',
//         marginTop: 45,
//         // marginBottom: 25
//         // paddingBottom: 22,
//     }
// })

// const HomeLayout = () => { //layout es como una plantilla, yo defino la plantilla para estas páginas.
//     return <View style={styles.PrincipalContainer}>
//         {/* <Link href="/" style={styles.subtitulo}>Cerrar Sesión</Link>  / es la pagina principal, Link funciona para enlaces, como <a> */}


//         <Stack screenOptions={{
//             headerShown: true,
//             headerTitle: "DestinApp",
//             headerBackTitle: "_______________________-",
//             headerTintColor: '#ffff',
//             headerStyle: {
//                 backgroundColor: '#000000',
//             },
//             headerTitleStyle: {
//                 fontWeight: 'bold',
//                 fontSize: 32,
//             },
//             tab
//             tabBarInactiveTintColor: 'gray',
//             tabBarStyle: {
//                 backgroundColor: '#000000',
//                 height: 60
//             }
//         }}>
//             <Link href="/" style={styles.subtitulo}>Cerrar Sesión</Link>  {/* / es la pagina principal, Link funciona para enlaces, como <a> */}
//             <Tabs.Screen
//             name="index"
//             options={{
//                 title: 'Inicio',
//                 tabBarIcon: ({color, size})=>(
//                       <Ionicons name="home" size={size} color={color} />
//                 ),
//             }}/>
//         </Stack>
//     </View>

// }

// export default HomeLayout;