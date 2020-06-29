import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './styles.css';

export default function Curso({ history }){
    const [titulo_curso, setTitulo] = useState('');
    const [data_inicio_curso, setInicio] = useState('');
    const [data_fim_curso, setFinal] = useState('');
    const [perfil_id, setPerfil_curso] = useState('');
    const [listaPerfil,setListaPerfil] = useState(['']);
    const [usuario,setUsuario] = useState(['']);
    const [novoCurso,setNovoCurso] = useState(['']);

    useEffect(() => {
      if(!localStorage.getItem('usuario')){
        history.push('');
      }
      api.get(`perfil`).then(resp => {
          setListaPerfil(resp.data);
      })
      api.get(`usuarios/${localStorage.getItem('usuario')}`).then(resp => {
        setUsuario(resp.data);
      })
    }, []);  

    async function cadastrarCurso(event){
      event.preventDefault();

      const curso = { titulo_curso: titulo_curso,
        data_inicio_curso: data_inicio_curso, 
        data_fim_curso: data_fim_curso, 
        perfil_id }

      await api.post(`perfil/${perfil_id}/cursos`,curso).then(resp => {
        setNovoCurso(resp.data);
        return (resp.data);
      }).catch(console.log(`Error: ${console.error}`));

      const email_usuario = usuario.email_usuario;
      const coordenador = {email_usuario: email_usuario};
      
      await api.post(`/curso/${titulo_curso}/coordenador`,coordenador).then(resp => {
        console.log(resp.data)
        return (resp.data);
      })

      history.push('/inicial');
    }

    async function cancelar(event){
      event.preventDefault();

      history.push('/inicial');
    }

    async function handleSubmit(event){
        event.preventDefault();


        history.push('/inicial');
  }

    return (
        <>
        <p>
          <strong>Cadastrar Curso</strong>
        </p>
      
      <form onSubmit = {handleSubmit}> 
        <label htmlFor="titulo_curso">Título*</label>
        <input 
          id="titulo_curso" 
          type="titulo_curso" 
          placeholder=""
          value = {titulo_curso}
          onChange={ event => setTitulo(event.target.value) }
        />

      <form onSubmit = {handleSubmit}> 
        <label htmlFor="data_inicio_curso ">Data de Inicio*</label>
        <input 
          id="data_inicio_curso" 
          type="date" 
          placeholder=""
          value = {data_inicio_curso}
          onChange={ event => setInicio(event.target.value) }
        />

      </form>

      <form onSubmit = {handleSubmit}> 
        <label htmlFor="data_fim_curso">Data Final*</label>
        <input 
          id="data_fim_curso" 
          type="date" 
          placeholder=""
          value = {data_fim_curso}
          onChange={ event => setFinal(event.target.value) }
        />

      </form>

      <form onSubmit = {handleSubmit}> 
        <label htmlFor="perfil_curso">Selecione o Perfil*</label>
            <select id="perfil_curso" value={perfil_id} onChange={event => setPerfil_curso(event.target.value)}>
                <option value = '0'>Selecione um Perfil</option>
                {listaPerfil.map(perfil => 
                    (<option value={perfil.id}>{perfil.titulo_perfil}</option>))}
            </select>

      </form> 

      </form>
     
      <button className="btn" onClick={cadastrarCurso}>Salvar</button>    
      <button className="btn" onClick={cancelar}>Cancelar</button>
      
      </>
    )
}
    