import React, { useState } from "react";
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { router, Link } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons"; //es el acceso a la librería de los iconos de MaterialCommunityIcons

//Recursos
// import logoApp from "../../../assets/images/logoApp.png";

//Estilos
const styles = StyleSheet.create({
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
        textAlign: 'left',
        fontWeight: 'bold'
    },
    botones: {
        color: '#000000ff',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    smallButtons: {
      color: '#0A91FF',
      fontSize: 18,
      textAlign: 'center',
      fontWeight: 'bold'
    },
    inputContainer:{ //estilo para posicionar tanto el contenedor para el usuario y pwd, tambien posiciona el icono de mostrar y ocultar el pwd a la derecha
      flexDirection: 'row', //los elementos se alinean en una fila
      alignItems: 'center',
      width: '100%',
      borderColor: '#777777ff',
      borderWidth: 1,
      borderRadius: 3,
      marginBottom: 20,
      paddingRight: 10 //es el espacio a la derecha del icono
    },
    msgError: {
        color: '#ff0000',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 16
    }
  })

const registerPage = () => {
    const [usuario, setUsuario] = useState<string>('');
    const [pwd, setPwd] = useState<string>('');
    const [showpwd, setShowpwd] = useState(false); //Inicialmente, la contraseña está oculta (secureTextEntry: true), por eso `showPassword` es `false`
    const [errorLogin, setErrorLogin] = useState('');
    
    const login = () => {
        setErrorLogin(''); //carga como vacio
        if(!usuario || !pwd) {
            setErrorLogin('Por favor, crea tu usuario y contraseña para crear tu cuenta.');
        } else {
            router.navigate('/(home)');
        }
    };

    const toggleShowPassword = () => { //toggleShowPassword es alternar entre mostrar y ocultar contraseña
      setShowpwd(!showpwd);//setShowpwd se encarga de asignar el valor que recibe a la variable showpwd
      //!showpwd con ese signo de excalación se podrá invertir el valor de la variable a la que se le aplica
    };
    
    return <View>
      <Image
        // source={logoApp}
      />
      <Text style={styles.titulo}>Regístrate</Text>
      <br></br>
      <Button
        title = "Registrarse con Facebook"
        onPress = {() => router.navigate('/(home)')}
      />
      <br></br>
      <Button
        title = "Registrarse con Google"
        onPress = {() => router.navigate('/(home)')}
      />
      <br></br>
      <Button
        title = "Registrarse con Apple"
        onPress = {() => router.navigate('/(home)')}
      />
                  
      <Text style={styles.subtitulo}>Usuario</Text>
      <TextInput style={styles.inputContainer}
        value = {usuario}
        onChangeText = {(text: string) => setUsuario(text)} 
      />

      <Text style={styles.subtitulo}>Contraseña</Text>
      <TextInput style={styles.inputContainer}
        value = {pwd}
        onChangeText = {setPwd}
        textContentType = "password" //propiedad opcional en iOS que ayuda al navegador a sugerir contraseñas guardadas para autocompletar
        secureTextEntry={!showpwd} //secureTextEntry secureTextEntry.
        // Si `showPassword` es `false` (contraseña oculta), `!showPassword` será `true`, ocultando el texto.
        // Si `showPassword` es `true` (contraseña visible), `!showPassword` será `false`, mostrando el texto
                  
                  
        // secureTextEntry = {true} //Oculta la contraseña
      />
      <TouchableOpacity onPress={toggleShowPassword}>
        <MaterialCommunityIcons
          name={showpwd ? 'eye-off' : 'eye'}
          //name se encarga de encontrar el icono que quieres usar, agregas el nombre de este aqui,
          //luego showpwd es la condición, ? es que está preguntando por la condición,
          //si la respuesta a esta condición es true, la contraseña es
          size={16}
          color="#999" 
        />
      </TouchableOpacity>

      <br></br>
      <Button
        title = "Registrar"
        onPress = {() => login()} //Función cuando se hace clic en el botón y revisa que se cumpla lo indicado en login
      />
      {errorLogin=='error' && <Text style={styles.msgError}>
        No se pudo registrar tu nueva cuenta.
      </Text> 
      } 
            
      <Link href="/(start)/login" style={styles.smallButtons}>¿Ya tienes una cuenta?</Link>
            
      <br></br>
            
      <Text style={styles.parrafo}>
        Al registrarse o iniciar sesión, acepto los Términos del Servicio XXX y la Política 
        de Privacidad, confirmo que tengo 18 años de edad o más y acepto recibir comunicaciones 
        por correo electrónico.
      </Text>    
    
    </View>
}

export default registerPage;