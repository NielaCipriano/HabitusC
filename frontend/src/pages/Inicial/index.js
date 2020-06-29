import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './styles.css';

export default function Inicial({history}){
    const [usuario, setUsuario] = useState(['']);

    useEffect(() => {
        if(!localStorage.getItem('usuario')){
            history.push('');
        }
        api.get(`usuarios/${localStorage.getItem('usuario')}`).then(resp => {
            setUsuario(resp.data);
        })
    }, []);

    async function logout(event){
        event.preventDefault();
        localStorage.clear();
        history.push('');
    }
    return (
    <>  

        <h5>Bem vindo! {usuario.nome_usuario}</h5>
      
        <ul className="botao">
            <Link to="/conteudo">
                <button className="btn">Cadastrar Conteúdo</button>           
            </Link>
            <Link to="/perfil">
                <button className="btn">Cadastrar Perfil</button>
            </Link>
            <Link to="/curso">
                <button className="btn">Cadastrar Curso</button>
            </Link>
            <Link to="/cadastrousuarios">
                <button className="btn" type="submit">Cadastrar Usuarios</button>                       
            </Link>
            <Link to="">
                <button className="btn" type="submit" onClick={logout}>Sair</button>                       
            </Link>
            {/*
            <Link to="/relatorio">
                <button className="btn">Gerar Relatórios</button>
            </Link>  
            <Link to="/fichaavaliacao">
                <button className="btn">Gerar Ficha de avaliação</button>
            </Link> 
            */}
        </ul>
    </>
    ) 
}