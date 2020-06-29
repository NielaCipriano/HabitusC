import React, { useState, useMemo } from 'react';
import api from '../../services/api';



export default function Relatório({ history }){
    const [titulo, setTitulo] = useState('');
    const [inicio, setInicio] = useState('');
    const [final, setFinal] = useState('');
    const [indicador, setIndicador] = useState('');
    const [avaliador, setAvaliador] = useState('');
    const [avaliados, setAvaliados] = useState('');
    const [situacao, setSituacao] = useState('');
    const [fato, setFato] = useState('');
    const [providencia, setProvidencia] = useState('');
    const [conteudo, setConteudo] = useState('');
    const [pauta, setpauta] = useState('');



    

    async function handleSubmit(event){
        event.preventDefault();

        const response = await api.post('sessions', { titulo })

        const { _id } = response.data;
    
        localStorage.setItem('user', _id);

        history.push('/inicial');

  }



    return (
        <>
        <p>
          <strong>Gerar Relatório</strong>
        </p>
      
      <label>
        Filtrar por:
      </label>
        <p>
          
        </p>

      <form onSubmit = {handleSubmit}> 
        <label htmlFor="titulo">Título*</label>
        <input 
          id="titulo" 
          type="titulo" 
          placeholder=""
          value = {titulo}
          onChange={ event => setTitulo(event.target.value) }
        />

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
        <label htmlFor="indicador">Selecione o Indicador:</label>
        <input 
          id="indicador" 
          type="indicador" 
          placeholder=""
          value = {indicador}
          onChange={ event => setFinal(event.target.value) }
        />

      </form>

      <form onSubmit = {handleSubmit}> 
        <label htmlFor="avaliador">Selecione o Avaliador:</label>
        <input 
          id="avaliador" 
          type="avaliador" 
          placeholder=""
          value = {avaliador}
          onChange={ event => setFinal(event.target.value) }
        />

      </form>  

      <form onSubmit = {handleSubmit}> 
        <label htmlFor="avaliados">Selecione o Avaliado:</label>
        <input 
          id="avaliados" 
          type="avaliados" 
          placeholder=""
          value = {avaliados}
          onChange={ event => setFinal(event.target.value) }
        />

      </form> 

      <form onSubmit = {handleSubmit}> 
        <label htmlFor="situacao">Selecione a Situação:</label>
        <input 
          id="situacao" 
          type="situacao" 
          placeholder=""
          value = {situacao}
          onChange={ event => setFinal(event.target.value) }
        />

      </form> 


      <form onSubmit = {handleSubmit}> 
        <label htmlFor="fato">Selecione o Fato:</label>
        <input 
          id="fato" 
          type="fato" 
          placeholder=""
          value = {fato}
          onChange={ event => setFinal(event.target.value) }
        />

      </form> 


      <form onSubmit = {handleSubmit}> 
        <label htmlFor="providencia">Selecione a Providência:</label>
        <input 
          id="providencia" 
          type="providencia" 
          placeholder=""
          value = {providencia}
          onChange={ event => setFinal(event.target.value) }
        />

      </form> 
 
      <form onSubmit = {handleSubmit}> 
        <label htmlFor="conteudo">Selecione o Conteúdo:</label>
        <input 
          id="conteudo" 
          type="conteudo" 
          placeholder=""
          value = {conteudo}
          onChange={ event => setFinal(event.target.value) }
        />

      </form> 

      <form onSubmit = {handleSubmit}> 
        <label htmlFor="pauta">Selecione a Pauta:</label>
        <input 
          id="pauta" 
          type="pauta" 
          placeholder=""
          value = {pauta}
          onChange={ event => setFinal(event.target.value) }
        />

      </form> 

       <button className="btn" type="submit">Gerar</button>
       <button className="btn" type="submit">Cancelar</button>
      

      </form>
      
      </>
    )
}
     