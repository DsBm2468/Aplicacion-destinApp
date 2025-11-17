import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, KeyboardAvoidingView, Platform, Pressable } from "react-native";
import { router, Link } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Estilos elegantes
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    scrollContainer: {
        flexGrow: 1,
        paddingHorizontal: 25,
        paddingVertical: 30,
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    titulo: {
        color: '#2c3e50',
        fontSize: 28,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10,
        letterSpacing: 0.5,
    },
    subtitulo: {
        color: '#2c3e50',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 30,
        opacity: 0.8,
    },
    socialButtonsContainer: {
        marginBottom: 25,
    },
    socialButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
        borderRadius: 12,
        paddingVertical: 14,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#e0e0e0',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    facebookButton: {
        borderColor: '#1877f2',
        backgroundColor: '#1877f2',
    },
    googleButton: {
        borderColor: '#4285f4',
        backgroundColor: '#4285f4',
    },
    appleButton: {
        borderColor: '#000000',
        backgroundColor: '#000000',
    },
    socialButtonText: {
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 10,
    },
    facebookText: {
        color: 'white',
    },
    googleText: {
        color: 'white',
    },
    appleText: {
        color: 'white',
    },
    socialIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
    separator: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 25,
    },
    separatorLine: {
        flex: 1,
        height: 1,
        backgroundColor: '#e0e0e0',
    },
    separatorText: {
        marginHorizontal: 15,
        color: '#7f8c8d',
        fontSize: 14,
    },
    inputLabel: {
        color: '#2c3e50',
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8,
        marginLeft: 5,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        borderColor: '#dce0e0',
        borderWidth: 1.5,
        borderRadius: 12,
        marginBottom: 20,
        paddingHorizontal: 15,
        backgroundColor: 'rgba(248, 249, 250, 0.8)',
        height: 56,
    },
    textInput: {
        flex: 1,
        fontSize: 16,
        paddingVertical: 15,
        color: '#2c3e50',
    },
    passwordIcon: {
        padding: 5,
    },
    loginButton: {
        backgroundColor: '#3498db',
        borderRadius: 25,
        paddingVertical: 16,
        marginTop: 10,
        marginBottom: 20,
        shadowColor: '#3498db',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.6,
        shadowRadius: 15,
        elevation: 10,
        borderWidth: 1,
        borderColor: '#2980b9',
    },
    loginButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        letterSpacing: 1,
    },
    registerLink: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
        color: '#3498db',
        marginBottom: 15,
    },
    forgotPassword: {
        textAlign: 'center',
        fontSize: 14,
        color: '#7f8c8d',
        marginBottom: 20,
    },
    termsText: {
        color: '#7f8c8d',
        fontSize: 12,
        textAlign: 'center',
        lineHeight: 16,
        marginBottom: 10,
    },
    msgError: {
        color: '#e74c3c',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
        paddingHorizontal: 20,
    },
});

const LoginPage = () => {
    const [usuario, setUsuario] = useState<string>('');
    const [pwd, setPwd] = useState<string>('');
    const [showpwd, setShowpwd] = useState(false);
    const [errorLogin, setErrorLogin] = useState('');

    const login = () => {
        setErrorLogin('');
        if(!usuario || !pwd) {
           setErrorLogin('Por favor, ingresa tu usuario y contraseña para continuar.');
        } else {
            router.navigate('/(home)');
        }
    };

    const toggleShowPassword = () => {
      setShowpwd(!showpwd);
    };

    const handleSocialLogin = (provider: string) => {
        console.log(`Iniciando sesión con ${provider}`);
        router.navigate('/(home)');
    };

    return (
        <KeyboardAvoidingView 
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView 
                contentContainerStyle={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
            >
                {/* Logo y título */}
                <View style={styles.logoContainer}>
                    <Image
                        // source={require('../../../assets/images/logoApp.png')}
                        style={styles.logo}
                    />
                    <Text style={styles.titulo}>Únete a nosotros</Text>
                    <Text style={styles.subtitulo}>Comienza tu aventura</Text>
                </View>

                {/* Botones de redes sociales */}
                <View style={styles.socialButtonsContainer}>
                    <Pressable 
                        style={[styles.socialButton, styles.facebookButton]}
                        onPress={() => handleSocialLogin('Facebook')}
                    >
                        <Image
                            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/124/124010.png' }}
                            style={[styles.socialIcon, { tintColor: 'white' }]}
                        />
                        <Text style={[styles.socialButtonText, styles.facebookText]}>
                            Iniciar sesión con Facebook
                        </Text>
                    </Pressable>
                    
                    <Pressable
                        style={[styles.socialButton, styles.googleButton]}
                        onPress={() => handleSocialLogin('Google')}
                    >
                        <Image
                            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/300/300221.png' }}
                            style={[styles.socialIcon, { tintColor: 'white' }]}
                        />
                        <Text style={[styles.socialButtonText, styles.googleText]}>
                            Iniciar sesión con Google
                        </Text>
                    </Pressable>
                    
                    <Pressable
                        style={[styles.socialButton, styles.appleButton]}
                        onPress={() => handleSocialLogin('Apple')}
                    >
                        <Image
                            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/0/747.png' }}
                            style={[styles.socialIcon, { tintColor: 'white' }]}
                        />
                        <Text style={[styles.socialButtonText, styles.appleText]}>
                            Iniciar sesión con Apple
                        </Text>
                    </Pressable>
                </View>

                {/* Separador */}
                <View style={styles.separator}>
                    <View style={styles.separatorLine} />
                    <Text style={styles.separatorText}>o</Text>
                    <View style={styles.separatorLine} />
                </View>

                {/* Formulario de login */}
                <Text style={styles.inputLabel}>Usuario o Email</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        value={usuario}
                        onChangeText={setUsuario}
                        placeholder="Ingresa tu usuario o email"
                        placeholderTextColor="#bdc3c7"
                        autoCapitalize="none"
                    />
                </View>

                <Text style={styles.inputLabel}>Contraseña</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        value={pwd}
                        onChangeText={setPwd}
                        placeholder="Ingresa tu contraseña"
                        placeholderTextColor="#bdc3c7"
                        secureTextEntry={!showpwd}
                        autoCapitalize="none"
                    />
                    <Pressable onPress={toggleShowPassword} style={styles.passwordIcon}>
                        <MaterialCommunityIcons
                            name={showpwd ? 'eye-off' : 'eye'}
                            size={20}
                            color="#7f8c8d"
                        />
                    </Pressable>
                </View>

                {/* Mensaje de error */}
                {errorLogin ? <Text style={styles.msgError}>{errorLogin}</Text> : null}

                {/* Botón de login */}
                <Pressable style={styles.loginButton} onPress={login}>
                    <Text style={styles.loginButtonText}>INICIAR SESIÓN</Text>
                </Pressable>

                {/* Enlaces */}
                <Link href="/(start)/login/register" style={styles.registerLink}>
                    ¿No tienes cuenta? Crear una ahora
                </Link>

                <Link href="/(start)/login/forgot" style={styles.forgotPassword}>
                    ¿Olvidaste tu contraseña?
                </Link>

                {/* Términos y condiciones */}
                <Text style={styles.termsText}>
                    Al registrarte o iniciar sesión, aceptas los Términos del Servicio 
                    y la Política de Privacidad de Destinapp. Confirmas que tienes 18 
                    años de edad o más y aceptas recibir comunicaciones relacionadas 
                    con tu cuenta.
                </Text>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

export default LoginPage;