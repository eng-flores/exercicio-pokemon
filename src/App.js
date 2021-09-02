import React, { useEffect, useState } from 'react';
import { getPokemons, getPokemonByName } from "./api/pokemonApi"

import "./App.css"
function App() {
  const [data, setData] = useState()
  const [pokemonDetail, setPokemonDetail] = useState()

  useEffect(() => {
    const getData = async () => {
      const initialData = await getPokemons();
      setData(initialData.data.results)
    }
    getData()
  }, [])

  const getPokemon = async(name)=> {
    const pokemon = await getPokemonByName(name)
    setPokemonDetail(pokemon.data)
  }
  return (
    <div className="container">
      <div>
        <h1>Lista</h1>
        {data?.map(pokemon => {
          return(
            <p onClick={()=> getPokemon(pokemon.name)} key={pokemon.url}>{pokemon.name}</p>
          )
        })
        }
      </div>
      {pokemonDetail && (
        <div>
        <h1>Detalhe Pokemon</h1>
        <img src={pokemonDetail?.sprites?.front_default} alt={pokemonDetail?.name}/>
        <p>Peso:{pokemonDetail.weight}</p>
        <p>Altura:{pokemonDetail.height}</p>
      </div>
      )}
    </div>
  );
}

export default App;
