import React, { useState } from 'react';
import api from '../../services/api';


export default function FichaAvaliacao({ history }){
    const [inicio, setInicio] = useState('');
    const [final, setFinal] = useState('');
    const [avaliados, setAvaliados] = useState('');
    
    

    async function handleSubmit(event){
        event.preventDefault();

        const response = await api.post('sessions', { inicio })

        const { _id } = response.data;
    
        localStorage.setItem('user', _id);

        history.push('/inicial');

  }



    return (
        <>
        <p>
          <strong>Gerar Ficha de Avaliação</strong>
        </p>
      
      <label>
        Filtrar por:
      </label>
        <p>
          
        </p>

      <form onSubmit = {handleSubmit}> 
       

      <form onSubmit = {handleSubmit}> 
        <label htmlFor="inicio ">Data de Inicio*</label>
        <input 
          id="inicio" 
          type="date" 
          placeholder=""
          value = {inicio}
          onChange={ event => setInicio(event.target.value) }
        />

      </form>

      <form onSubmit = {handleSubmit}> 
        <label htmlFor="final">Data Final*</label>
        <input 
          id="final" 
          type="date" 
          placeholder=""
          value = {final}
          onChange={ event => setFinal(event.target.value) }
        />

      </form>

      <form onSubmit = {handleSubmit}> 
        <label htmlFor="final">Avaliados:</label>
        <input 
          id="avaliados" 
          type="avaliados" 
          placeholder="Selecione os avaliados"
          value = {avaliados}
          onChange={ event => setFinal(event.target.value) }
        />

      </form>
     
       <button className="btn" type="submit">Gerar</button>
       <button className="btn" type="submit">Cancelar</button>
      

      </form>
      
      </>
    )
}
     