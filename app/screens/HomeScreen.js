import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

function HomeScreen(props) {
    return (
        <View style={styles.background}>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "greenyellow",
        flex: 1,
        justifyContent: "flex-end",
        width: undefined,
        height: undefined,
        alignItems: 'center'
    }
})

export default HomeScreen;