import React, { useState, useEffect } from 'react';
import { View, KeyboardAvoidingView, Platform, Image, FlatList, Picker, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api';




export default function ListarFato( { navigation }){

    const [avaliador_id,setAvaliador] = useState('');
    const [nome_avaliador,setNome] = useState('');
    const [fatos, setFatos] = useState([]);
    const [avaliados,setAvaliados] = useState([]);
    const [texto, setTexto] = useState('');

    // var text = "";
    // var lista = [];
    // var obj = {a: 1, b: 2};
    // obj.a => 1
    // obj['a'] => 1

    async function exibir(){
        api.get(`/curso/fo`, {
            params: {
                avaliador_id
            }
        }).then(resp => {
            setFatos(resp.data);
        }).catch(() => console.log(`Error: ${console.error}`));

    }

    return(
        <View style={styles.container}>
            <Text style={styles.label}>LISTAR FATO</Text>

            <View style={styles.form}>

                <Text style={styles.label}>Selecione o Avaliador</Text>
                <TextInput
                    style={styles.Input}
                    placeholder="Avaliador"
                    placeholderTextColor= "#999"
                    autoCorrect={false}
                    type="number"
                    keyboardType='numeric'
                    defaultValue= {avaliador_id}
                    onChangeText= {avaliador_id => setAvaliador(avaliador_id)}
                    />

            <View>
            {fatos.map(fato => <Text>{'\nData: '}{fato.data_fato} {'Tipo: '}{fato.tipo_fato}{'\n'}
            {'Conteúdo Atitudinal: '} {fato.conteudoFato.nome_conteudo} {'\nPauta: '} {fato.pautaFato.desc_pauta}
            {'\nFato: '} {fato.fatoFato.desc_fato} {'\nAtividade: '} {fato.atividadeFato.desc_atividade}
            {'\nProvidência: '} {fato.providenciaFato.desc_providencia} {'\nAlunos: '}
            {(fato.avaliados).map(usuario => <Text>{usuario.usuarioAvaliado.nome_usuario}{'\n'}</Text>)}
            </Text>)}
            </View>

                <TouchableOpacity onPress={exibir} style={styles.button}>
                    <Text style={styles.buttonText}>Exibir</Text>
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

