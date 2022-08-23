import { createContext, useState } from 'react'

export const GlobalContext = createContext({})

export const ContextProvider = ({ children }: any) => { 
  const [ pokemonList, setPokemonList ] = useState([])
  const [ currentPokemonList, setCurrentPokemonList ] = useState([])
  const [itensPerPage, setItensPerPage] = useState(12)
    
  return (
    <GlobalContext.Provider value={{ pokemonList, setPokemonList, currentPokemonList, setCurrentPokemonList, itensPerPage, setItensPerPage }}>
      {children}
    </GlobalContext.Provider>
  )
}