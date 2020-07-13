import React, { useState, useEffect } from 'react';
import { View, KeyboardAvoidingView, Platform, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';

import usuario from '../../assets/usuario.jpg';


export default function CadastroAvaliador( { navigation }){

    const [senha_usuario, setSenha_usuario] = useState('');

    
  useEffect(() => {
    api.get('avaliador').then(resp => {
      setAvaliadores(resp.data);
    });
  
  }, []);

    async function handleSubmit(){


        const { _id } = response.data;

        await AsyncStorage.setItem('user', _id);

        //ir para proxima tela
       navigation.navigate('HomeAvaliador');

    }

    return(
        <View style={styles.container}>
            <Text style={styles.label}>CADASTRO</Text>


            
            <Text style={styles.label}>Nome Completo</Text>
            <Text style={styles.label}>E-mail</Text>
            <View style={styles.form}>


                <Text style={styles.label}>Senha *</Text>
                <TextInput
                    style={styles.Input}
                    secureTextEntry={true}
                    placeholder="Sua senha"
                    placeholderTextColor= "#999"
                    autoCorrect={false}
                    titulo="senha_usuario"
                    //value={senha}
                    //onChangeText={setSenha}



                    />

                <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                    <Text style={styles.buttonText}>Salvar</Text>
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
        marginTop: 20,
    },

    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 10,
        marginTop: 40
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

