import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, View, Image } from 'react-native';
import FlatButton from '../../shared/button';

function WelcomeScreen({ navigation }) {

    const pressHandlerEntrar = () => {
        navigation.navigate('Home');
    }

    return (
        <ImageBackground 
        style={styles.background}
        source={require('../assets/welcome-books.jpg')}>

            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo.png')} />
            </View> 

            <View style={styles.buttonContainer}>
                <FlatButton text='Entrar' onPress={pressHandlerEntrar} />
                <FlatButton text='Cadastrar' />
            </View>    

            <StatusBar style="auto" />

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        width: undefined,
        height: undefined,
        alignItems: 'center'
    },
    logo: {
        width: 200,
        height: 200,
    },
    logoContainer: {
        position: "absolute",
        top: "10%",
        alignItems: "center"
    },
    buttonContainer: {
        width: "70%",
        height: "20%",
        /* backgroundColor: "white", */
        position: "absolute",
        alignItems: "center",
        justifyContent: "space-around",
        bottom: "20%",

    }
})

export default WelcomeScreen;