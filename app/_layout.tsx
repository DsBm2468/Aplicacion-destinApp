import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";  //Proviene de la dependencia  npx expo install react-native-safe-area-context
//Detecta las áreas seguras de la pantalla (notch, barras del sistema, etc.) en iOS y Android.

//ESTE LAYOUT JUNTO CON LA NUEVA DEPENDENCIA SE ENCARGARÁN DE DAR EL ESPACIO NECESARIO PARA PERMITIR LA VISTA DE LOS ELEMENTOS EN EL DISPOSITIVO CORRECTAMENTE 

const RootLayout = () => {
    return (
        <SafeAreaProvider>  {/* permite que funcione en otro layout(el que está en (home)) */}
            <Stack screenOptions = {{
                  headerShown: false, //No mostrar header en este nivel, este se maneja en el layout de home
                  animation: 'none' // Sin animaciones
                }}>
                <Stack.Screen name="index"/> {/*Representa tu archivo app/index.tsx */}
                <Stack.Screen name="(home)"/>   {/* Representa toda la carpeta `app/(home)/` */}
            </Stack>
        </SafeAreaProvider>
    )
}

export default RootLayout;
