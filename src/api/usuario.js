import axios from "axios"

const baseUrl = "https://api-nodejs-todolist.herokuapp.com/user"

export const registrarUsuario = async (dados) => {
  const url = `${baseUrl}/register`
  return await axios.post(url, dados)
}

export const login = async (dados) => {
  const url = `${baseUrl}/login`
  const result = await axios.post(url, dados)
  const token = result.data.token
  localStorage.setItem("usuario", token)
  return result
}

export const minhasInformacoes = async () => {
  const url = `${baseUrl}/me`
  const token = localStorage.getItem("usuario")
  const config = {
    headers: {Authorization: `Bearer ${token}`}
  }
  const result = await axios.get(url, config)
  return result
}