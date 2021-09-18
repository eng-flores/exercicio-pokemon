import React, { useState } from 'react';
import { registrarUsuario } from "./api/usuario"
import "./App.css"

function App() {
  const [nome, setNome] = useState()
  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()
  const [idade, setIdade] = useState()

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = { name: nome, email: email, password: senha, age: idade }
    registrarUsuario(data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" onChange={(event) => setNome(event.target.value)} />
        </label>
        <label>
          Email:
          <input type="text" onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label>
          Senha:
          <input type="password" onChange={(event) => setSenha(event.target.value)} />
        </label>
        <label>
          Idade:
          <input type="text" onChange={(event) => setIdade(event.target.value)} />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
