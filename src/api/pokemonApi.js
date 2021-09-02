import axios from "axios"

const baseUrl = "https://pokeapi.co/api/v2"

export const getPokemons = async () => {
  const url = `${baseUrl}/pokemon?limit=50&offset=200`
  return await axios.get(url)
}

export const getPokemonByName = async (pokemonName) => {
  const url = `${baseUrl}/pokemon/${pokemonName}`
  return await axios.get(url)
}