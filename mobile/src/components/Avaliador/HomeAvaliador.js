import React, { useState, useEffect } from 'react';
import { View, KeyboardAvoidingView, Platform, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';

import logo from '../../assets/logo.jpg';


export default function HomeAvaliador( { navigation }){



    //Após logado direcionar diretamente para a próxima tela
    /*
    useEffect(() => {
        AsyncStorage.getItem('user').then(user => {
            if(user){
                navigation.navigate('List');
            }
        })
    }, []);

*/
    async function handleSubmit(){

        const { _id } = response.data;

        await AsyncStorage.setItem('user', _id);

        //ir para proxima tela
       navigation.navigate('HomeAvaliador');

    }

    return(
        
        <View style={styles.container}>
            <Image source={logo} />
            <Text style={styles.label}>Bem vindo!</Text>
        </View>

    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },

    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 50,
    },

    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8,
        marginTop: 10,
        
        
    },

    input: {
       borderWidth: 1,
       borderColor: '#ddd',
       paddingHorizontal: 20,
       fontSize: 18,
       color: '#444',
       height: 44,
       marginBottom: 20,
       borderRadius: 2
    },

    button: {
        height: 42,
        backgroundColor: '#006400',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        marginTop: 30,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    }
});

