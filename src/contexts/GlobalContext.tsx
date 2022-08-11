import { createContext, useState } from 'react'
import axios from 'axios'

type PokemonList = typeof initList
type Pokemon = typeof initPokemon

const initList = {
  next: "",
  results: [
    {
      name: "",
      url: "",
    }
  ]
}

const initPokemon = {
  id: "",
  name: "",
  types: [
    {
      type: {
        name: ""
      }
    }
  ],
  sprites: {
    other: {
      ["official-artwork"]: {
        "front_default": ""
      }
    }
  }
}

export const GlobalContext = createContext({})

export const ContextProvider = ({ children }: any) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [list, setList] = useState<PokemonList>(initList)
  const [pokemon, setPokemon] = useState<Pokemon>(initPokemon)

  async function fetchPokemonList(path: string) {
    setLoading(true)
    const url = path
    axios({
      method: "get",
      url: url,
    }).then(function (response) {
      setList(response.data)
      console.log("List State: ", list)
    }).catch(function (error) {
      console.error(error.data)
    })
  }

  function fetchPokemon(name: string) {
    if (!loading) {
      setLoading(true)
      const url = `https://pokeapi.co/api/v2/pokemon/${name}`
      axios({
        method: "get",
        url: url,
      }).then(function (response) {
        setPokemon(response.data)
        console.log("Pokemon State: ", pokemon)
      }).catch(function (error) {
        console.log(error.data)
      })
    }
  }

  return (
    <GlobalContext.Provider value={{ loading, setLoading, list, setList, pokemon, setPokemon, fetchPokemonList, fetchPokemon }}>
      {children}
    </GlobalContext.Provider>
  )
}