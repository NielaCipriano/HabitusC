import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({ history }){
  const [email_usuario, setEmail] = useState('');
  const [senha_usuario, setSenha] = useState('');

  async function login(event){
    event.preventDefault();
    await api.post(`login`, {
      email_usuario,
      senha_usuario
    }).then(resp => {
      const {id} = resp.data;
      localStorage.setItem('usuario',id);
      history.push('inicial');
    }).catch(console.log(`Error: ${console.error}`));
  }

  return (
    <form>
      <form>
        <label htmlFor="email_usuario">E-MAIL*</label>
        <input
          titulo = "email_usuario"
          id="email_usuario"
          type="email_usuario"
          placeholder="Seu melhor e-mail"
          value = {email_usuario}
          onChange={ event => setEmail(event.target.value) }
        />

        <label htmlFor="senha_usuario">SENHA*</label>
        <input
          id="senha_usuario"
          type="password"
          placeholder="Sua senha"
          value = {senha_usuario}
          onChange={ event => setSenha(event.target.value) }
        />
      </form>
      <button className="btn" onClick={login}>Login</button>
    </form>
    )
}