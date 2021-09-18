import axios from "axios"
const urlBase = "http://localhost:3000"

export const criarTarefa = async (tarefa) => {
  const url = `${urlBase}/tarefas`
  return await axios.post(url, tarefa)
}

export const getAllTarefas = async() => {
  const url = `${urlBase}/tarefas`
  return await axios.get(url)
}

export const deletarTarefa = async (id) => {
  const url = `${urlBase}/tarefas/${id}`
  return await axios.delete(url)
}