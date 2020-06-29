import React, { useEffect, useState, useMemo } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import camera from '../../assets/camera.svg';
import './styles.css';

export default function New({ history }){
    const [thumbnail, setThumbnail] = useState(null);
    const [nome_usuario, setName] = useState('');
    const [email_usuario, setEmail] = useState('');
    const [senha_usuario, setSenha] = useState('');
    const [tipo_usuario,setTipo_usuario] = useState('');
    const [curso_id,setCurso_avaliado] = useState('');
    const [listaCurso,setListaCurso] = useState(['']);

    useEffect(() => {
        if(!localStorage.getItem('usuario')){
            history.push('');
        }
      api.get(`cursos`).then(resp => {
          setListaCurso(resp.data);
      })
    }, []);  

    async function cadastrarAvaliado(event){
        event.preventDefault();

        if(tipo_usuario == 1){
        const usuario = {tipo_usuario: 'Avaliado', nome_usuario: nome_usuario,
        email_usuario: email_usuario, senha_usuario: 1111,foto_usuario: 'fotoPadrao'}

        await api.post(`usuarios`,usuario).then(resp => {
            return resp.data;
        }).catch(console.log(`Error: ${console.error}`));
        
        const avaliado = {email_usuario: email_usuario};

        api.post(`curso/avaliado/${curso_id}`,avaliado).then(resp => {
            return resp.data;
        }).catch(console.log(`Error: ${console.error}`));

        } else if (tipo_usuario == 2) {

            const usuario = {tipo_usuario: 'Avaliador', nome_usuario: nome_usuario,
            email_usuario: email_usuario, senha_usuario: 1111,foto_usuario: 'fotoPadrao'}
    
            await api.post(`usuarios`,usuario).then(resp => {
                return resp.data;
            }).catch(console.log(`Error: ${console.error}`));
            
            const avaliador = {email_usuario: email_usuario};
    
            api.post(`avaliador/${curso_id}`,avaliador).then(resp => {
                return resp.data;
            }).catch(console.log(`Error: ${console.error}`));
        }

        history.push('/inicial');
      }
  
    async function cancelar(event){
      event.preventDefault();
  
      history.push('/inicial');
    }

    const preview = useMemo(() => {
        return thumbnail ? URL.createObjectURL(thumbnail) : null;
    }, [thumbnail])

    async function handleSubmit(event) {
       event.preventDefault();

       history.push('/inicial');
    }

    return (
        <form>

            <form onSubmit = {handleSubmit}> 
            <label htmlFor="tipo_usuario">Selecione o Tipo Usuario*</label>
                <select id="tipo_usuario" value={tipo_usuario} onChange={event => setTipo_usuario(event.target.value)}>
                    <option value = '0'>Selecione um Tipo de Usuário</option>
                    <option value = '1'>Avaliado</option>
                    <option value = '2'>Avaliador</option>
                </select>

                <label htmlFor="curso_avaliado">Selecione o Curso*</label>
                <select id="curso_avaliado" value={curso_id} onChange={event => setCurso_avaliado(event.target.value)}>
                    <option value = '0'>Selecione um Curso</option>
                        {listaCurso.map(curso => 
                        (<option value={curso.id}>{curso.titulo_curso}</option>))}
                </select>
            </form>

            <label htmlFor="nome_usuario">NOME *</label>
            <input 
                id= "nome_usuario"
                placeholder=""
                value={nome_usuario}
                onChange={event => setName(event.target.value)}
                titulo="nome_usuario"
            />
        
            <label htmlFor="email_usuario">E-MAIL * </label>
            <input 
                id= "email_usuario"
                type="email"
                placeholder=""
                value={email_usuario}
                onChange={event => setEmail(event.target.value)}
                titulo="email_usuario"
            />

        <button className="btn" onClick={cadastrarAvaliado}>Salvar</button>    
        <button className="btn" onClick={cancelar}>Cancelar</button>

        </form>
    )
}