import React, { useEffect, useState } from 'react';
import api from '../../services/api';

export default function Perfil({ history }){
    const [titulo_perfil, setTitulo] = useState('');
    const [conteudos, setConteudos] = useState(['']);
    const [conteudoA,setConteudoA] = useState(['']);
    const [conteudoB,setConteudoB] = useState(['']);
    const [conteudoC,setConteudoC] = useState(['']);
    const [conteudoD,setConteudoD] = useState(['']);
    const [conteudoE,setConteudoE] = useState(['']);
    const [perfil] = useState(['']);
    
    useEffect(() => {
        if(!localStorage.getItem('usuario')){
            history.push('');
        }
        api.get(`conteudos`).then(resp => {
            setConteudos(resp.data);
        })
    }, []);

    async function cadastrarPerfil(event){
      event.preventDefault();

      const perfil = {titulo_perfil: titulo_perfil, conteudoA: conteudoA,
                conteudoB: conteudoB, conteudoC: conteudoC, conteudoD: conteudoD, conteudoE: conteudoE}
      api.post(`perfil`,perfil).then(resp => {
          return resp.data;
      }).catch(console.log(`Error: ${console.error}`));

      history.push('/inicial');
    }

    async function cancelar(event){
      event.preventDefault();

      history.push('/inicial');
    }
  
    async function handleSubmit(event){

    }

    return (
        <>
        <p>
          <strong>Cadastrar Perfil Profissiográfico</strong>
        </p>
        <form onSubmit = {handleSubmit}> 
            <label htmlFor="titulo_perfil">TÍTULO*</label>
            <input 
            id="titulo_perfil" 
            type="titulo_perfil" 
            placeholder=""
            value = {titulo_perfil}
            onChange={ event => setTitulo(event.target.value) }
            />
            <label htmlFor="conteudos">Selecione 5 (cinco) Conteúdos:</label>
            <select id="conteudoA" value={conteudoA} onChange={event => {setConteudoA(event.target.value)}}>
                <option value = '0'>Selecione um Conteúdo</option>
                {conteudos.map(conteudo => 
                    (<option value={conteudo.id}>{conteudo.nome_conteudo}</option>))}
            </select>
            <select id="conteudoB" value={conteudoB} onChange={event => setConteudoB(event.target.value)}>
                <option value = '0'>Selecione um Conteúdo</option>
                {conteudos.map(conteudo => 
                    (<option value={conteudo.id}>{conteudo.nome_conteudo}</option>))}
            </select>
            <select id="conteudoC" value={conteudoC} onChange={event => setConteudoC(event.target.value)}>
                <option value = '0'>Selecione um Conteúdo</option>
                {conteudos.map(conteudo => 
                    (<option value={conteudo.id}>{conteudo.nome_conteudo}</option>))}
            </select>
            <select id="conteudoD" value={conteudoD} onChange={event => setConteudoD(event.target.value)}>
                <option value = '0'>Selecione um Conteúdo</option>
                {conteudos.map(conteudo => 
                    (<option value={conteudo.id}>{conteudo.nome_conteudo}</option>))}
            </select>
            <select id="conteudoE" value={conteudoE} onChange={event => setConteudoE(event.target.value)}>
                <option value = '0'>Selecione um Conteúdo</option>
                {conteudos.map(conteudo => 
                    (<option value={conteudo.id}>{conteudo.nome_conteudo}</option>))}
            </select>
          <button className="btn" onClick={cadastrarPerfil}>Salvar</button>    
          <button className="btn" onClick={cancelar}>Cancelar</button>   
        </form>
        </>
        )
}