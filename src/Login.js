import React, { useState } from 'react';
import { login } from "./api/usuario"

function Login() {
  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = { email: email, password: senha }
    login(data)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="text" onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label>
          Senha:
          <input type="password" onChange={(event) => setSenha(event.target.value)} />
        </label>
        <input type="submit" />
      </form>

    </div>
  );
}

export default Login;
