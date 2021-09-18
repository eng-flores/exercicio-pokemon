import React, { useState } from 'react';
import { criarTarefa, getAllTarefas, deletarTarefa } from "./api/tarefas"

function App() {
  const [tarefa, setTarefa] = useState("")
  const [lista, setLista] = useState("")

  const criar = () => {
    const conteudo = { tarefa: tarefa }
    criarTarefa(conteudo)
  }

  const listar = async() => {
    const result = await getAllTarefas()
    setLista(result)
  }

  const deletar = (id) => {
    deletarTarefa(id)
  }

  return (
    <div>
      <label>
        Crie sua tarefa:
        <input type="text" onChange={(event) => setTarefa(event.target.value)} />
      </label>
      <button onClick={() => criar()}>Criar</button>
      <button onClick={() => listar()}>Listar tarefas</button>
      {lista && (lista.data?.map(element => {
        return (
          <div key={element.id} onClick={()=> deletar(element.id)}>
            <p>Tarefa</p>
            <p>{element.tarefa}</p>
            <p>ID</p>
            <p>{element.id}</p>
          </div>
        )
      }))}
    </div>
  );
}

export default App;
