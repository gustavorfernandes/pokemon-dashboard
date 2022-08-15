import { createContext, useState } from 'react'
import axios from 'axios'

export const GlobalContext = createContext({})

export const ContextProvider = ({ children }: any) => {  
  
  const [pokemonList, setPokemonList] = useState([])
  const [pokemon, setPokemon] = useState({})
  const [pokeUrl, setPokeUrl] = useState("https://pokeapi.co/api/v2/pokemon/1/")

  

  async function fetchPokemon(url: string) {
    await axios.get(url)
    .then((response) => {
      setPokemon(response.data)
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <GlobalContext.Provider value={{ pokemonList, setPokemonList, pokemon, setPokemon, fetchPokemon, pokeUrl, setPokeUrl }}>
      {children}
    </GlobalContext.Provider>
  )
}