import React, { useState, useEffect } from 'react';
import { View, KeyboardAvoidingView, Platform, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';




export default function FichaAvaliacao( { navigation }){

    async function handleSubmit(){


        const { _id } = response.data;

        await AsyncStorage.setItem('user', _id);

        //ir para proxima tela
       navigation.navigate('HomeAvaliador');

    }

    return(
        <View style={styles.container}>
            <Text style={styles.label}>FICHA DE AVALIAÇÃO</Text>

            <View style={styles.form}>

                <Text style={styles.label}>Selecione a ficha de avaliação </Text>
                <TextInput
                    style={styles.Input}
                    secureTextEntry={true}
                    placeholder="Ficha de avaliação 01"
                    placeholderTextColor= "#999"
                    autoCorrect={false}
                    //value={senha}
                    //onChangeText={setSenha}



                    />

                <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                    <Text style={styles.buttonText}>Abrir</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                    <Text style={styles.buttonText}>Cancelar</Text>
                </TouchableOpacity>


            </View>
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
        marginTop: 30
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

